import clientPromise from "../../lib/mongodb"

export default async (req, res) => {

    try {
        const client = await clientPromise;

        const db = client.db("chat");

        const data = await db.collection('users').insertOne({
            ...req.body
        })
        return res.json(data)
    } catch (error) {
        console.log('error', error)
    }
}
