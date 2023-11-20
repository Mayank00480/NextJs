import { MongoClient } from "mongodb"
import MeetupList from "@/components/meetups/MeetupList"
const dummy_Items = [
    {
        id : 'm1',
        image : 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Berlin_Museumsinsel_Fernsehturm.jpg',
        title : 'First MeetUp',
        address : 'Dabua Colony',
        description : 'This is the First MeetUp'
    },
    {
        id : 'm2',
        image : 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Berlin_Museumsinsel_Fernsehturm.jpg',
        title : 'Second MeetUp',
        address : 'A 483 Dabua Colony ',
        description : 'This is the second meetup'
    }
]
export default function HomePage(props){
    


    return (
        <MeetupList meetups = {props.meetups} />

)    }
export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://mayanksharma1937:1XG5ZTABdDArvz9D@cluster0.rx6kopz.mongodb.net/');
    const db = client.db();
    const collection = db.collection('meetup')
    const meetups = await collection.find().toArray();
    return {
        props : {
          meetups :  meetups.map(item => {
            return {
                title : item.title,
                id : item._id.toString(),
                description : item.description,
                address : item.address,
                image : item.image
            }
          })         
        }

    }
}