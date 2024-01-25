import React from 'react'
import { useUsersQuery } from '../services/useUsers'

function Home() {
  const { data: users } = useUsersQuery()
  console.log(users)

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default Home
