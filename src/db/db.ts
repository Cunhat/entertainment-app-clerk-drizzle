import { connect } from '@planetscale/database'
import { drizzle } from "drizzle-orm/planetscale-serverless";
import {streamItem} from './schema'


const config = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
}


const conn = connect(config)
export const db = drizzle(conn, { logger: true });

export const getUsers = async () => {
    return await db.select().from(streamItem);
  };