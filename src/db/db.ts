import { connect } from '@planetscale/database'
import { drizzle } from "drizzle-orm/planetscale-serverless";
import {streamItem, category, rating} from './schema'
import { on } from 'events';
import { InferModel, eq, sql } from 'drizzle-orm';



const config = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
}


const conn = connect(config)
export const db = drizzle(conn, { logger: true });

export const getStreamItems = async () => {
    const streamItems = await db.select()
    .from(streamItem)
    .leftJoin(category, eq(streamItem.categoryId, category.id))
    .leftJoin(rating, eq(streamItem.ratingId, rating.id));
     return streamItems;
  };