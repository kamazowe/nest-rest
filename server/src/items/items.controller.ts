import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item';
import { ItemDto } from './dto/itemDto';

@Controller('api/items')
export class ItemsController {

  constructor(private readonly itemService: ItemsService) {
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Item> {
    return this.itemService.findOne(param.id);
  }

  @Post()
  async create(@Body() itemDto: ItemDto): Promise<Item> {
    return await this.itemService.create(itemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Item> {
    return await this.itemService.delete(id);
  }

  @Put(':id')
  async updateAndOverride(@Body() updateItem: ItemDto, @Param('id') id): Promise<Item> {
    return await this.itemService.updateAndOverride(id, updateItem);
  }

  @Patch(':id')
  async update(@Body() updateItem: Partial<ItemDto>, @Param('id') id): Promise<Item> {
    return await this.itemService.update(id, updateItem);
  }
}
