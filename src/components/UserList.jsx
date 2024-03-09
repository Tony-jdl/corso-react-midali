import React from 'react'
import User from './User'

const UserList = ({ users }) => {
  return (
    <div className=' '>
      <ul className='bg-gray-400 rounded-lg h-fit w-60 text-center mx-2 p-2 '>
        <h3>Lista Utenti</h3>
            {
              users
              .map((user) => (
                <li><User
                  key={user.key}
                  name={user.name}
                  email={user.email}
                ></User></li>
              ))
            }
      </ul>
    </div>
  )
}

export default UserList