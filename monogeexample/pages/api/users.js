
import clientPromise from "../../lib/mongodb"

export default async (req, res) => {

    try {
        // `await clientPromise` will use the default database passed in the MONGODB_URI
        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
        //
        // `const client = await clientPromise`
        // `const db = client.db("myDatabase")`
        //
        // Then you can execute queries against your database like so:
        // db.find({}) or any of the MongoDB Node Driver commands
        
        const client = await clientPromise;
        const db = client.db("chat");

        const Users = await db.collection('users').find({}).sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        return res.json(Users)
    } catch (error) {
        console.log('error', error)
    }
}
