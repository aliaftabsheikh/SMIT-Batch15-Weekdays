import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

const products = [
  {
    id: 1,
    name: "Shalwar Kameez",
    price: 2500,
    description: "Classic cotton shalwar kameez in white.",
    image: "https://example.com/shalwar-kameez.jpg",
  },
  {
    id: 2,
    name: "Ajrak",
    price: 1500,
    description: "Traditional Sindhi block-printed shawl.",
    image: "https://example.com/ajrak.jpg",
  },
  {
    id: 3,
    name: "Peshawari Chappal",
    price: 3000,
    description: "Handmade leather sandals from Peshawar.",
    image: "https://example.com/peshawari-chappal.jpg",
  },
  {
    id: 4,
    name: "Kurta Pajama",
    price: 2000,
    description: "Elegant embroidered kurta with pajama.",
    image: "https://example.com/kurta-pajama.jpg",
  },
  {
    id: 5,
    name: "Sindhi Topi",
    price: 800,
    description: "Traditional cap with mirror work.",
    image: "https://example.com/sindhi-topi.jpg",
  },
  {
    id: 6,
    name: "Peshawari Topi",
    price: 800,
    description: "Traditional cap with mirror work.",
    image: "https://example.com/peshawari-topi.jpg",
  },
];

export const GET = async (req: NextRequest) => {
  const cookieList = await cookies();

  console.log('COOKIE TOKEN ', cookieList.get('token')?.value)


const searchParams = req.nextUrl.searchParams;
const search = searchParams.get("search");

const filterData = products.filter((product) => product.name.toLowerCase().includes(search?.toLowerCase() ?? ""));



  return new Response(JSON.stringify(filterData), {
    headers: { "Content-Type": "application/json"},
  });
};

