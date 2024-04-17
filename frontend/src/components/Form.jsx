import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Form.css"
import Loading from "./Loading";

function Form({route, method}) {
    // Initialize variables used for logging in/registering
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const type = method === "login" ? "Login" : "Register"
    const alternateTitle = method === "login" ? "Register" : "Login" 
    const alternateBody = method === "login" ? "Don't have an account: " : "Already have an account: "
    const alternateLink = method === "login" ? "/register" : "/login"
    const disclaimer = method === "register" ? "Disclaimer: Avoid using any personal information when registering, for more information refer to the privacy policy" : ""

    const submitAction = async (e) => {
        setLoading(true);
        e.preventDefault();

        try{
            const response = await api.post(route, {username, password});

            // Assign Access and Refresh tokens upon logging in and redirect to model page
            if(method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate("/")
            }
            // Redirect to login page once registered
            else {
                navigate("/login")
            }
        }
        catch (error) {
            alert(error)
        }
        finally {
            setLoading(false)
        }
    };

    // Create general form for logging in and registering
    return <form onSubmit={submitAction} className="general-form-container">
        <h1>{type}</h1>
        <input className="general-form-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
        <input className="general-form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
        {loading && <Loading />}
        <p>{disclaimer}</p>
        
        <button className="general-form-button" type="submit">{type}</button>
        <p>{alternateBody}<a href={alternateLink}>{alternateTitle}</a></p>
        </form>
}

export default Form