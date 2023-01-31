import mongoose from "mongoose";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    try {
        
        const client = await clientPromise

        const db = client.db('chat')

        const singleUser = await db.collection('users')
            .findOne({ _id: mongoose.Types.ObjectId(req.query.id) })

        if (singleUser) return res.json(singleUser)

    } catch (error) {
        console.log('error-->', error)
    }
}