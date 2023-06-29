'use client'
import { FC, useState } from 'react'
import { useAuth } from '@clerk/nextjs'
import { api } from 'lib/axios'

export const ActionsSection: FC = () => {
  const { getToken } = useAuth()
  const [userData, setUserData] = useState(null)
  const handleGetUserDataFromServer = async () => {
    try {
      const token = await getToken()

      const { data } = await api.get('/private', {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUserData(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="p-4">
      <h2 className="text-zinc-200 font-bold mb-4">Actions</h2>
      <div className="p-2">
        <button
          className="text-zinc-100 border p-2 rounded-md hover:bg-gray-700 transition"
          onClick={handleGetUserDataFromServer}
        >
          Get User Data From Server
        </button>
      </div>

      {userData && (
        <pre className="text-zinc-300 p-2">
          {JSON.stringify(userData, null, 2)}
        </pre>
      )}
    </section>
  )
}
