import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const demiUsers = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    password: "password123",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    password: "securepassword",
  },
  {
    id: 3,
    username: "alice_wonder",
    email: "alice@example.com",
    password: "alicepassword",
  },
  {
    id: 3,
    username: "aliaftab",
    email: "ali@gmail.com",
    password: "ali1234",
  },
];

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    const cookie = await cookies();

    if (email === "" || password === "") {
      throw new Error("Invalid input");
    }

    const user = demiUsers.find((user) => user.email === email && user.password === password);

    if(!user){
        throw new Error("User not found");
    }

    const token = await jwt.sign({ id: user.id, email: user.email }, "SECRET_KEY", { expiresIn: "1h" });

    cookie.set("token", token);

    return new NextResponse(JSON.stringify({ message: "Login successful", user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });


  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: "Invalid request" , error: error.message}), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
