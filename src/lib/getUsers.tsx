import { error } from "console"

export default async function getUsers() {
const res= await fetch('https://jsonplaceholder.typicode.com/users')    

if(!res.ok){
    throw new Error("Error")
}

return res.json()
}