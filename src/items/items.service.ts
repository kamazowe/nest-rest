import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({_id: id});
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async updateAndOverride(id, item: Item): Promise<Item> {
    // raturn new value
    return await this.itemModel.findByIdAndUpdate(id, item, {new: true});
  }

  async update(id, item: Partial<Item>): Promise<Item> {
    // return prev value
    return await this.itemModel.findByIdAndUpdate(id, item, {new: false});
  }
}
