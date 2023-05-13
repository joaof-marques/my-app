import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb://localhost:27017";
export const client = new MongoClient(url);
client.connect();
export const db = client.db("my-app");

// DB usage
export const carsCollection = db.collection("cars");

carsCollection
  .find({})
  .toArray()
  .then((cars) => {
    if (!cars.length) {
      carsCollection.insertOne({ name: "Honda Civic", brand: "Honda" });
    }
  });
