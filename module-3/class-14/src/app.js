const express = require('express');
const { MongoClient , ObjectId} = require('mongodb')

const app = express()


const uri = 'mongodb+srv://rikoher986:HFqmeeL3w4vHjQnD@cluster0.ujmedn6.mongodb.net/'

const client = new MongoClient(uri)

const dbName = 'SmitB15'

async function main() {
    await client.connect()
    console.log('Connected successfully to Database !');

    const db = client.db(dbName)
    const collection = db.collection('students')

    const data = {
        name: "Kashif",
        age: 24,
        email: "kashif@example.com"
    }

    // const insertResult = await collection.insertMany([data]);

    // console.log('Inserted documents =>', insertResult);


    const findResult = await collection.find({_id: new ObjectId('68aee393b7b9ca3a329810c6')}).toArray()
    console.log('Found documents =>', findResult);


    return "Done !"
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})










