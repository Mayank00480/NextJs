import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

const NewMeetUp = () => {
    function onAddItem(item){
     console.log(item);
    }
  return (
    <NewMeetupForm onAddMeetup = {onAddItem} />
  )
}

export default NewMeetUp
