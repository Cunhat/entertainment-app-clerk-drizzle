import { connect } from '@planetscale/database'
import { drizzle } from "drizzle-orm/planetscale-serverless";
import {streamItem} from './schema'


const config = {
  host: 'aws.connect.psdb.cloud/entertainment-app',
  username: "z279q25bie2olvq6u9xz",
  password: 'pscale_pw_gizgiN2VDvwkkKwe9WTsCMuCD9oR3saDKL2CYJ79NMs'
}


const conn = connect(config)
export const db = drizzle(conn, { logger: true });

export const getUsers = async () => {
    return await db.select().from(streamItem);
  };