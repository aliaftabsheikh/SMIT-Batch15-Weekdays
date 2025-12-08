import { demiUsers } from "@/utils/userData";

export async function GET(request: Request, { params }: { params: { userId: string } }) {
    const { userId } = await params;

    const user = demiUsers.find(user => user.id === parseInt(userId));

    if(!user){
        return new Response("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(user));
}