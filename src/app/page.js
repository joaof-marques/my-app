import { carsCollection } from "@/lib/monbodb";

export default async function Home() {
  const cars = await carsCollection.find({}).toArray();
  console.log(`Home cars:`, cars); // __AUTO_GENERATED_PRINT_VAR__
  return (
    <main className="w-full h-full bg-base-300">
      <div>
        <form className="flex flex-col space-y-3" onSubmit={console.log}>
          <input name="name" className="input" />
          <input name="brand" className="input" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}
