'use server'
import { headers } from "next/headers"

interface apiProps{
    initData:string
}
const DataQuery = {
    "data" : "user=%7B%22id%22%3A106852820%2C%22first_name%22%3A%22Sohrab%22%2C%22last_name%22%3A%22Kheirkhah%22%2C%22username%22%3A%22s_kheirkhah%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=146776223792350967&chat_type=private&auth_date=1722759526&hash=4b4319d4309c28cf968fcb4b11694634d8b6be5ba465204fd0ce961475192dd4"
}
const ApiTest = async () => {
    const forwardedFor = headers().get('x-forwarded-host')||""
    console.log(forwardedFor)
    const res = await fetch("http://192.168.254.9:3000/v1/telegram/user",{
        method:"PUT",
        body:JSON.stringify(DataQuery)
    })
    const verify = await res.json()
    console.log("api test result : "+res.statusText)
    return Response.json(verify);
}

export default ApiTest;