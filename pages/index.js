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
    return {
        props : {
          meetups : dummy_Items            
        }

    }
}