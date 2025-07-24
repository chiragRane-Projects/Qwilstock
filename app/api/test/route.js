import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        await connectDB();
        return NextResponse.json({"message": "Connection established in test route"}, {status: 200})
    } catch (error) {
        return NextResponse.json({"error": error}, {status: 500})
    }
}