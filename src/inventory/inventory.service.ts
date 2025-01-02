import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { StockHistory } from './entities/stock-history.entity';
import { CreateProductDto } from './CreateProductDto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(StockHistory)
    private readonly stockHistoryRepository: Repository<StockHistory>,
  ) {}

  async findAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findProduct(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create({
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      quantity: createProductDto.quantity,
      sku: createProductDto.sku,
    });
  
    return await this.productRepository.save(product);
  }
  

  async updateProduct(id: number, updateProductDto: any): Promise<Product> {
    await this.findProduct(id); // Ensure product exists
    await this.productRepository.update(id, updateProductDto);
    return this.findProduct(id);
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.findProduct(id);
    await this.productRepository.remove(product);
  }

  async addStockHistory(addStockHistoryDto: any): Promise<StockHistory> {
    const { productId, change, reason } = addStockHistoryDto;
    const product = await this.findProduct(productId);
    
    const stockHistory = this.stockHistoryRepository.create({
      product,
      change,
      reason,
    });
    
    // Update the product's quantity
    product.quantity += change;
    await this.productRepository.save(product);

    return this.stockHistoryRepository.save(stockHistory);
  }
}
