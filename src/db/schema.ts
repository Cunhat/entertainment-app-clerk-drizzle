// db.ts
import {
    boolean,
    datetime,
    index,
    int,
    mysqlTable,
    serial,
    uniqueIndex,
    varchar
  } from "drizzle-orm/mysql-core";
  
  // declaring enum in database
  export const streamItem = mysqlTable(
    "stream_item",
    {
      id: serial("id").primaryKey(),
      title: varchar("title", { length: 256 }),
      isTrending: boolean("isTrending"),
      year: int("year"),
      thumbnailUrl: varchar("thumbnailUrl", { length: 256 }),
      categoryId: int("categoryId"),
      ratingId: int("ratingId"),
      // isBookmarked: boolean("isBookmarked"),
    },
    (streamItem) => ({
      titleIndex: uniqueIndex("title_idx").on(streamItem.title),
     
    })
    
  );

  export const category = mysqlTable(
    "category",
    {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 256 }),
    }
  );

  export const rating = mysqlTable(
    "rating",
    {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 256 }),
    }
  );
  