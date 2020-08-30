
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://zirah352:Euro2016@clusterbootcamp.bbalc.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect( async err => {
    const collection = client.db("grades").collection("student");
    const documents = await collection.find({subject: 'Matematica'}).toArray();
    // console.log(documents);

    const dataBaseList = await client.db().admin().listDatabases();
    console.log('Databases');
    dataBaseList.databases.forEach(db => console.log(` - ${db.name}`))
    
    client.close();
});
