// db.ts
import {
    boolean,
    datetime,
    int,
    mysqlTable,
    serial,
    uniqueIndex,
    varchar,
  } from "drizzle-orm/mysql-core";
  
  // declaring enum in database
  export const streamItem = mysqlTable(
    "stream_item",
    {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 256 }),
      isTrending: boolean("is_trending"),
      releaseDate: datetime("release_date"),
      thumbnailUrl: varchar("thumbnail_url", { length: 256 }),
      typeId: int("type_id"),
      classificationId: int("classification_id"),
    },
    (streamItem) => ({
      nameIndex: uniqueIndex("name_idx").on(streamItem.name),
      typeIdIndex: uniqueIndex("type_id_idx").on(streamItem.typeId),
      classificationIdIndex: uniqueIndex("classification_id_idx").on(streamItem.classificationId),
    })
    
  );

  export const type = mysqlTable(
    "type",
    {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 256 }),
    }
  );

  export const classification = mysqlTable(
    "classification",
    {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 256 }),
    }
  );
  