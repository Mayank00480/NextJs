import React from 'react'
import { useRouter } from 'next/router'
import MeetUpDetails from '@/components/meetups/MeetUpDetails'

const MeetUpItems = (props) => {
    const router = useRouter()
  return (
    <MeetUpDetails id = {props.id}/>
  )
}
export function getStaticPaths(){
return {
fallback : false,
  paths : [
    {
      params : {
        newmeetupid : 'm1'
      }
    },
    {
      params : {
        newmeetupid : 'm2'
      }
    },
    {
      params : {
        newmeetupid : 'm3'
      }
    }
  ]
}
}
export async function getStaticProps(context) {
const id = context.params.newmeetupid;
  return {
    props : {
      id : id
    }
  }
}
export default  MeetUpItems 
