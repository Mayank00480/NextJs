import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

const NewMeetUp = () => {
    async function onAddItem(item){
     const res = await fetch('/api/meetup',{
      method : 'POST',
      body : JSON.stringify(item),
      headers : {
        "Content-Type" : "application/json"
      }
     })
     const response  = await res.json();
     console.log(response);
     
    }
  return (
    <NewMeetupForm onAddMeetup = {onAddItem} />
  )
}

export default NewMeetUp
