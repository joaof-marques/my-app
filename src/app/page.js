import { carsCollection } from "@/lib/monbodb";

export default async function Home() {
  const cars = await carsCollection.find({}).toArray();
  console.log(`Home cars:`, cars); // __AUTO_GENERATED_PRINT_VAR__
  return (
    <main className="">
      <div>
        <form>
          <input />
          <input />
        </form>
      </div>
    </main>
  );
}
