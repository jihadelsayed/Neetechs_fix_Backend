import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('products')
  async findAllProducts() {
    return this.inventoryService.findAllProducts();
  }

  @Get('products/:id')
  async findProduct(@Param('id') id: number) {
    return this.inventoryService.findProduct(id);
  }

  @Post('products')
  async createProduct(@Body() createProductDto: any) {
    return this.inventoryService.createProduct(createProductDto);
  }

  @Patch('products/:id')
  async updateProduct(@Param('id') id: number, @Body() updateProductDto: any) {
    return this.inventoryService.updateProduct(id, updateProductDto);
  }

  @Delete('products/:id')
  async deleteProduct(@Param('id') id: number) {
    return this.inventoryService.deleteProduct(id);
  }

  @Post('stock-history')
  async addStockHistory(@Body() addStockHistoryDto: any) {
    return this.inventoryService.addStockHistory(addStockHistoryDto);
  }
}
