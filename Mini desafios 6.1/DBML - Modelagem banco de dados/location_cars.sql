CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text UNIQUE NOT NULL,
  "phone" text NOT NULL,
  "address" text
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "order_id" int,
  "address_id" int NOT NULL,
  "phone" text NOT NULL
);

CREATE TABLE "address" (
  "id" SERIAL PRIMARY KEY,
  "street" text NOT NULL,
  "number" int NOT NULL,
  "district" text NOT NULL,
  "CEP" int NOT NULL
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" int NOT NULL,
  "license_plate" text NOT NULL,
  "color" text NOT NULL,
  "shift_system" int NOT NULL
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text NOT NULL,
  "name" text NOT NULL,
  "version" text NOT NULL,
  "type" text NOT NULL,
  "year" int NOT NULL
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "return_date" datetime NOT NULL,
  "lease_date" datetime NOT NULL,
  "lease_value" int NOT NULL
);

CREATE TABLE "location_cars" (
  "id" SERIAL PRIMARY KEY,
  "car_id" int,
  "order_id" int
);

ALTER TABLE "address" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("address_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("order_id");

ALTER TABLE "location_cars" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "location_cars" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");
