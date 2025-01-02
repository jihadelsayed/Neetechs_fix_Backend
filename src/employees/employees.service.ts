import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './CreateEmployeeDto';
import { UpdateEmployeeDto } from './UpdateEmployeeDto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({ where: { id } });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.save({ ...updateEmployeeDto, id });
  }

  remove(id: number): Promise<void> {
    return this.employeeRepository.delete(id).then(() => {});
  }
}
