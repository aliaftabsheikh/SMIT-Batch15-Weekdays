import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    console.log("PROXY IS RUNNING !");

    const cookie = await cookies();

    const jwtToken = cookie.get('token')?.value

    console.log("JWT_TOKEN IN PROXY: ", jwtToken);

    if(!jwtToken){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: [
    '/',
    '/products',
  ],
}