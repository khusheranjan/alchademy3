import React from 'react'
import Dashcard from '@/resources/Dashcard'

function page() {
  return (
    <div className=' m-6 flex flex-wrap gap-x-6 gap-y-10'>
        <Dashcard/>
        <Dashcard/>
        <Dashcard/>
        <Dashcard/>
        <Dashcard/>
        <Dashcard/>
    </div>
  )
}

export default page