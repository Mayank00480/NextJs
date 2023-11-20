import { MongoClient } from "mongodb";

async function Handler(req,res){
const data = req.body;
console.log(data);
const client = await MongoClient.connect('mongodb+srv://mayanksharma1937:1XG5ZTABdDArvz9D@cluster0.rx6kopz.mongodb.net/');
const db = client.db()
const collection = db.collection('meetup')
collection.insertOne(data)
//client.close()
res.status(201).json({message : 'meetup inserted'})
} 
export default Handler 