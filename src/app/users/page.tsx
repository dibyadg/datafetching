import React from 'react'
import getUsers from '@/lib/getUsers'
import Link from 'next/link'

type userType={
    name:string,
    id:number
}

export default async function Userpage() {
    const Users =await getUsers()
  
  return (
    <div className='m-10'>
        <h3 className='text-center text-3xl mb-10'>List of Users</h3>
      {Users.map((user:userType)=>{
        return (
            <>
            <Link href={'/users/${id}'}>
            <p key={user.id} className='m-4 text-center'>{user.name}</p>
            </Link>
            </>
        )
      })}
    </div>
  )
}

