import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

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
  cart: integer(),
  role: varchar({ enum: ["user", "employee", "admin"] })
    .default("user")
    .notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }),
});

export const carts = pgTable("carts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
  buyerId: integer("buyer_id").references(() => users.id),
  products: integer().array().default([]),
});

export const cartsRelation = relations(carts, ({ one }) => ({
  user: one(users, { fields: [carts.buyerId], references: [users.id] }),
}));

export const userRelations = relations(users, ({ many, one }) => ({
  purchases: many(purchases),
  cart: one(carts),
}));

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  img: varchar({ length: 255 })
    .default("https://i.postimg.cc/DzHZvsBd/no-image.png")
    .notNull(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 513 }),
  price: integer().notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }),
});

export const purchases = pgTable("purchases", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  verified: boolean().default(false),
  trackingCode: varchar({ length: 255 }).notNull(),
  buyerId: integer("buyer_id"),
  items: integer().references(() => products.id),
});

export const purchasesRelations = relations(purchases, ({ one, many }) => ({
  buyer: one(users, {
    fields: [purchases.buyerId],
    references: [users.id],
  }),
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
