import { createContext, useState } from "react";
import { NEXT_URL } from "../components/configs";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const register = (user) => {
        console.log(user)
    }

    const login = async (user) => {
        console.log(user)

        const res = await fetch(`${NEXT_URL}/api/events/login`, {
            method: "POST",
            headers: {
                'Content-Type': "Application/Json"
            },
            body: JSON.stringify(user)

        })
        const data = await res.json()


        console.log('data-->', data)
        if (data.error) {

            setError(data.error.message)
        } else {
            setUser(data)
        }
    }

    const logout = (user) => {
        console.log(user)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                error,
                setError,
                register,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext