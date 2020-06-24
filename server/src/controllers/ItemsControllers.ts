import { Request, Response } from 'express';
import Knex from '../database/connection';

class ItemsController {
   async index(request: Request, response: Response)  {
    const items = await Knex('items').select('*');
  
   
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.1.5:3333/uploads/${item.image}` //exp://192.168.1.5:19000
      };
    });
  
    return response.json(serializedItems);
  
  }
}

export default ItemsController;