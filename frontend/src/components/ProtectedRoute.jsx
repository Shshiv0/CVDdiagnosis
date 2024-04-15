import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import {jwtDecode} from "jwt-decode"
import {Navigate, useOutletContext} from "react-router-dom"
import { useState, useEffect } from "react"

function ProtectedRoute({children}) {
    const[Authorized, setAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setAuthorized(false))
    }, [])

    // Refresh access token
    const refresh_token = async () => {
        const refresh_token = localStorage.getItem(REFRESH_TOKEN)
        try {
            const response = await api.post("/api/token/refresh/", {
                refresh: refresh_token,
            });
            if(response.status === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                setAuthorized(true)
            }
            else{
                setAuthorized(false)
            }
        }
        catch (error) {
            console.log(error)
            setAuthorized(false)
        }
    }

    // Verify if access token needs to be refreshed
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if(!token) {
            setAuthorized(false)
            return
        }
        const decodedToken = jwtDecode(token)
        const expirationToken = decodedToken.exp
        const current = Date.now() / 1000

        if(expirationToken < current) {
            await refresh_token()
        }
        else {
            setAuthorized(true)
        }
    }

    // Check state of Authorized
    if (Authorized === null) {
        return <div>Loading</div>
    }
    // If not authorized redirect to login page
    return Authorized ? children : <Navigate to="/home" />
}

export default ProtectedRoute