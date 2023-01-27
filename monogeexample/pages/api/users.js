
import clientPromise from "../../lib/mongodb"

export default async (req, res) => {

    try {
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
