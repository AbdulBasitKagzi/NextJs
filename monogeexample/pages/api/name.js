import clientPromise from "../../lib/mongodb"
import { Test } from "../../models/testModel";

export default async (req, res) => {

    try {
        const client = await clientPromise;

        const db = client.db("chat");
        console.log("body-->", req.body)

        // const data = await Test.create({
        //     name: req.body.name
        // })   
        const data = await Test.create({
            name: req.body.name,
        })

        console.log('name--->', data)
        return res.json(data)
    } catch (error) {
        console.log('error', error)
    }
}
