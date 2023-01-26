import { API_URL } from "../../../components/configs"
import cookie from "cookie"


export default async function subodh(req, res) {
    if (req.method === "POST") {

        const strapiRes = await fetch(`${API_URL}/auth/local`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(req.body)

        })
        const data = await strapiRes.json()

        if (data.jwt) {
            res.setHeader('Set-Cookie', cookie.serialize('token', data.jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                sameSite: 'strict',
                path: '/'
            }));
        }
        return res.status(200).json(data)
    } else {
        res.setHeader('Allow', ["POST"])
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}