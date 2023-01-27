import { API_URL } from "../../../components/configs"
import cookie from "cookie"


export default async function jmein(req, res) {
    if (req.method === "POST") {

        const data = res.setHeader('Set-Cookie', cookie.serialize('token', "", {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            expires: new Date(0),
            sameSite: 'strict',
            path: '/'
        }));
        console.log('data', data)

        return res.status(200).json({ Message: "Success" })
    } else {

        // res.setHeader('Allow', ["POST"])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}