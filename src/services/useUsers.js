import { useQuery } from '@tanstack/react-query'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
    staleTime: 60000,
  })
}

export { useUsersQuery }
