import React from 'react'
import { useRouter } from 'next/router'
import MeetUpDetails from '@/components/meetups/MeetUpDetails'
import { MongoClient } from 'mongodb'
const MeetUpItems = (props) => {
    const router = useRouter()
  return (
    <MeetUpDetails id = {props.id}/>
  )
}
export async function getStaticPaths(){
  const client = await MongoClient.connect('mongodb+srv://mayanksharma1937:1XG5ZTABdDArvz9D@cluster0.rx6kopz.mongodb.net/');
  const db = client.db();
  const collection = db.collection('meetup')
  const meetups = await collection.find({} , {_id : 1}).toArray();
return {
fallback : false,
  paths : meetups.map(item => {
    return {
      params : {
        newmeetupid : item._id.toString()
      }
    }
  })

}}
export async function getStaticProps(context) {
const id = context.params.newmeetupid;
  return {
    props : {
      id : id
    }
  }
}
export default  MeetUpItems 
