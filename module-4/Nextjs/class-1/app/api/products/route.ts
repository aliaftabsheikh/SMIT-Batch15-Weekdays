export async function GET() {
  return  Response.json([
    {
        id: 1,
        name: "Product 1",
        price: 100
    },

    {
        id: 2,
        name: "Product 2",
        price: 100
    }
  ])
}