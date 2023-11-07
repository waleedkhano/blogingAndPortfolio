import Post from "@/models/Post"
import connect from "@/utlils/db"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    const {id} = params;
    try {
        await connect()

        const posts = await Post.findById(id)
        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (error) {
        return new NextResponse("DataBase error", {status: 500})
    }

}



export const DELETE = async (req, {params}) => {
    const {id} = params;
    try {
        await connect()

        await Post.findByIdAndDelete(id)
        return new NextResponse("Post has been deleted", {status: 200})
    } catch (error) {
        return new NextResponse("DataBase error", {status: 500})
    }

}