const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";
const db_name = "nlp_config";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function getData() {
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection("suggestions");
        const data = await collection.find({}).toArray();
        return data;
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    } finally {

    }
}

module.exports = { getData };