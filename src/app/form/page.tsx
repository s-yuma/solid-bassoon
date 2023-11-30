import React from 'react'
import { adduser } from '../lib/postuser'

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <form action={async formData => {
            "use server"
            await adduser(formData)
        }} className='flex-col'>
            <label htmlFor="name" className='flex borde'>名前:
            <input type="text" name='name'id='name' /></label>
            <label htmlFor="birth" className='flex'>誕生日:
            <input type="date" name='birth'id='birth'/></label>
            <label htmlFor="email" className='flex'>メール:
            <input type="email" name='email'id='email'/></label>
            <button type='submit' className='bg-red-300'>送信</button>
        </form>    
    </main>
  )
}

export default page