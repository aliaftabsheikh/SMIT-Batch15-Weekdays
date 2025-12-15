import { NextResponse , NextRequest} from "next/server"
import { products } from "@/app/lib/data";

export const GET = (req: NextRequest)=>{
    return NextResponse.json(products);
}


export const POST = async (req: NextRequest)=>{
    const newProduct = await req.json();

    console.log("NEW PRODUCT ", newProduct);
    
    products.push(newProduct);
    return NextResponse.json(newProduct, {status: 201});
}   