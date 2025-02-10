import { relations } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

//one to one ex:users and users a user invited another user

// one to many ex:users pots or users purchases a user and it's posts

//many to many ex:many users in many groups

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
  fullName: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phoneNumber: varchar({ length: 11 }).notNull().unique(),
  role: varchar({ enum: ["user", "employee", "admin"] })
    .default("user")
    .notNull(),
  purchases: integer(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }),
});

export const purchases = pgTable("purchases", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
  buyerId: integer("buyer_id"),
});

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
  img: varchar({ length: 255 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 513 }),
  price: integer().notNull(),
  // buyersId: integer().references(() => users.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }),
});

export const userRelations = relations(users, ({ many }) => ({
  purchases: many(purchases),
}));

export const purchasesRelation = relations(purchases, ({ one, many }) => ({
  buyer: one(users, {
    fields: [purchases.buyerId],
    references: [users.id],
  }),
  items: many(products),
}));
