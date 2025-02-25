import { relations } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

//one to one ex:users and users a user invited another user

// one to many ex:users pots or users purchases a user and it's posts

//many to many ex:many users in many groups

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
  fullName: varchar({ length: 255 }),
  age: integer(),
  email: varchar({ length: 255 }).unique(),
  phone_number: varchar({ length: 11 }).unique(),
  otp_code: varchar({ length: 10 }),
  otp_expiration: timestamp(),

  role: varchar({ enum: ["user", "employee", "admin"] })
    .default("user")
    .notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }),
});

export const userRelations = relations(users, ({ many }) => ({
  purchases: many(purchases),
}));

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  img: varchar({ length: 255 })
    .default("https://i.postimg.cc/DzHZvsBd/no-image.png")
    .notNull(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 513 }),
  price: integer().notNull(),
  // buyersId: integer().references(() => users.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }),
});

export const purchases = pgTable("purchases", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  buyerId: integer("buyer_id"),
  // items: integer()
  //   .array()
  //   .references(() => products.id),
});

export const purchasesRelations = relations(purchases, ({ one }) => ({
  buyer: one(users, {
    fields: [purchases.buyerId],
    references: [users.id],
  }),
  // items: many(products),
}));

export const states = pgTable("states", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  stateId: integer(),
});

export const statesRelation = relations(states, ({ many }) => ({
  cities: many(cities),
}));

export const cities = pgTable("cities", {
  id: integer().primaryKey(),
  state_id: integer(),
  name: varchar(),
});

export const citiesRelations = relations(cities, ({ one }) => ({
  stateId: one(states, {
    fields: [cities.state_id],
    references: [states.stateId],
  }),
  // items: many(products),
}));
