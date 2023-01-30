import clientPromise from "../../lib/mongodb"

export default async (req, res) => {

    try {
        const client = await clientPromise;

        const db = client.db("chat");
        console.log("body-->", req.body)

        const data = await db.collection('Test').insertOne({
            name: req.body.name
        })

        return res.json(data)
    } catch (error) {
        console.log('error', error)
    }
}
