'use server'
 
export async function GET(request:Request) {
    const res = await fetch("")
    const data = await res.json()
    console.log(data.test)
    
}