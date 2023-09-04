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

async function addDocument(newDoc) {
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection("suggestions");
        await createDoc(client, {
            name: newDoc.name,
            prompt: newDoc.prompt
        })
        const data = await collection.find({}).toArray();
        return data;
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    } finally {

    }
}

async function deleteDocument(name) {
    try {
        await client.connect();
        const db = client.db(db_name);
        const collection = db.collection("suggestions");
        await removeDoc(client, name);
        const data = await collection.find({}).toArray();
        return data;
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    } finally {

    }
}

async function createDoc(client, document) {
    const result = await client.db("nlp_config").collection("suggestions").insertOne(document);
    console.log(`new listing id: ${result.insertedId}`);
}

async function removeDoc(client, filter) {
    const result = await client.db("nlp_config").collection("suggestions").deleteOne({ name: filter });
    console.log(`deleted listing.`);
}

module.exports = { getData, addDocument, deleteDocument };