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
    },
    (streamItem) => ({
      nameIndex: uniqueIndex("name_idx").on(streamItem.name),
    })
  );
  
//   export const citizens = mysqlTable(
//     "citizens",
//     {
//       id: serial("id").primaryKey(),
//       fullName: varchar("full_name", { length: 256 }),
//       countryCode: int("country_code"),
//     },
//     (citizen) => ({
//       countryIndex: uniqueIndex("country_idx").on(citizen.countryCode),
//     })
//   );