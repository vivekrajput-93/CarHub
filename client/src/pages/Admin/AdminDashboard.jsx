import React from 'react'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../components/Layouts/AdminMenu'

const AdminDashboard = () => {

    const[auth, setAuth] = useAuth()

  return (
    <div className='mt-[120px] flex h-screen justify-evenly '>
      <div className='w-[300px] h-full'>
        <AdminMenu />
      </div>

      <div className='border w-2/3'>
        hello
      </div>
    </div>
  )
}

export default AdminDashboard