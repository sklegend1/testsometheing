'use server'

import jsondata from "@/public/test"

export async function POST(request:Request) {
    
    //console.log(data.test)
    return Response.json(jsondata)
    
}
export async function PUT(request:Request) {
     
    const res = await Response
    console.log()
    return Response.json(jsondata)
    
}