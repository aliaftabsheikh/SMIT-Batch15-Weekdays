const express = require('express')
const {MongoClient} = require('mongodb')

const app = express()

const uri = 'mongodb+srv://Database:aliaftab321@cluster0.51l7ww2.mongodb.net/'

const client = new MongoClient(uri)

const dbName = 'SaylaniBatch15'

async function main(){
    try {
       await client.connect()
       const db = client.db(dbName)
       const collection = db.collection('students')

       const insertOneDoc = await collection.insertOne({
         
       })

       console.log('Inserted documents =>', insertOneDoc);

    //    const getDoc = await collection.find({}).toArray()


    // const getDoc = await collection.find({age: 25}).toArray()

    //    console.log('Found documents =>', getDoc);

    // const updateDoc = await collection.updateMany(
    //     {age: 25},
    //     {$set: {age: 30}}
    // )

    // console.log('Updated documents =>', updateDoc);


    // const deleteDoc = await collection.deleteMany({age: 30})

    // console.log('Deleted documents =>', deleteDoc);

    // const deleteDoc = await collection.findOneAndDelete({name: "John Doe Updated"})

    // console.log('Deleted documents =>', deleteDoc);
    //    return "DONE "
     
    } catch (error) {
        console.log(error);
        
    }
}


main().then(() => {
  console.log('Connected to the database')
}).catch((error) => {
  console.error('Error connecting to the database:', error)
}).finally(() => {
  client.close()
})

app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/getTodos', (req, res) => {
  res.send('Hello World!')
})
app.use('/addTodo', (req, res) => {
  res.send('Hello World!')
})
app.use('/deleteTodo', (req, res) => {
  res.send('Hello World!')
})
app.use('/updateTodo', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})