"use server"
import axios from "axios"
import { redirect } from "next/navigation"
export const adduser = async (formdata:FormData) => {
    const name = formdata.get("name")
    const birth = formdata.get("birth")
    const email = formdata.get("email")
    const id = Math.floor( Math.random() * 100 );
    console.log(name)

    await axios.post("http://localhost:3004/user", {
        id,
        name,
        birth,
        email,
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    }).finally(
        redirect(`http://localhost:3000/check/?name=${name}`)
    )
}

