import { demiUsers } from "@/utils/userData"


export async function GET() {
  return new Response(JSON.stringify(demiUsers))
}