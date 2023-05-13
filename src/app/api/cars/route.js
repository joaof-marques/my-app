export async function POST(req, res) {
  // Get data submitted in request's body.
  const formData = await req.formData();
  const [name] = formData.getAll("name");
  console.log(`POST name:`, name); // __AUTO_GENERATED_PRINT_VAR__
  const [brand] = formData.getAll("brand");
  console.log(`POST brand:`, brand); // __AUTO_GENERATED_PRINT_VAR__
}
