import React from 'react'
import Sidebar from './components/sidebar'
import Mainbar from './components/mainbar'

export default function page() {
  return (
    <div className='flex w-full'>
      <div className='flex border border-gray-700 w-1/5 justify-center'><Sidebar/></div>
      <div className='flex border border-gray-700 w-4/5'><Mainbar/></div>
    </div>
  )
}
