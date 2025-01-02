import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerLoyalty } from './entities/customer-loyalty.entity';
import { CreateCustomerDto } from './CreateCustomerDto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(CustomerLoyalty)
    private readonly loyaltyRepository: Repository<CustomerLoyalty>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find({ relations: ['loyaltyPoints'] });
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customerRepository.findOne({ where: { id }, relations: ['loyaltyPoints'] });
    if (!customer) throw new NotFoundException(`Customer with ID ${id} not found`);
    return customer;
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create({
      name: createCustomerDto.name,
      email: createCustomerDto.email,
      phone: createCustomerDto.phone,
      address: createCustomerDto.address,
      // Other fields as necessary
    });
  
    return await this.customerRepository.save(customer);
  }
  

  async update(id: number, updateCustomerDto: any): Promise<Customer> {
    await this.findOne(id); // Ensure customer exists
    await this.customerRepository.update(id, updateCustomerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);
    await this.customerRepository.remove(customer);
  }

  async addLoyaltyPoints(customerId: number, points: number, description: string): Promise<CustomerLoyalty> {
    const customer = await this.findOne(customerId);
    const loyalty = this.loyaltyRepository.create({ customer, points, description });
    return this.loyaltyRepository.save(loyalty);
  }
}
