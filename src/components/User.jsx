import React from 'react'

const User = ({ name, email }) => {
  return (
    <div className='rounded-lg bg-zinc-700 text-white flex flex-col m-2'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default User