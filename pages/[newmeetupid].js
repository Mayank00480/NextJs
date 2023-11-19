import React from 'react'
import { useRouter } from 'next/router'
const MeetUpItems = () => {
    const router = useRouter()
  return (
    <h1>
      {router.query.newmeetupid}
    </h1>
  )
}

export default  MeetUpItems 
