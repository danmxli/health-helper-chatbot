const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        // await createDoc(client, {
        //     name: 'Joe',
        //     prompt: 'eye'
        // })
        await deleteDoc(client, "edward")
        await getData(client);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

async function getData(client) {
    const db = client.db("nlp_config");
    const collection = db.collection("suggestions");
    const data = await collection.find({}).toArray();
    console.log(data);
}

async function listDb(client) {
    const dbList = await client.db().admin().listDatabases();
    console.log("database:");
    dbList.databases.forEach(db => {
        console.log(`${db.name}`)
    });
}

async function createDoc(client, document) {
    const result = await client.db("nlp_config").collection("suggestions").insertOne(document);
    console.log(`new listing id: ${result.insertedId}`);
}

async function deleteDoc(client, filter) {
    const result = await client.db("nlp_config").collection("suggestions").deleteOne({ name: filter });
    console.log(`deleted listing.`);
}