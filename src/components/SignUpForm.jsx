import { useState } from "react"



export default function SignUpForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Sign up failed"); // Throw error with message from response data or default message
            }
            
            console.log("Sign up successful:", data);
            setUsername("");
            setPassword("");
            setError(null);
        } catch (error) {
            setError(error.message || "Something went wrong. Please try again.");
        }
    }
    return <div><h2> Sign up! </h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button> Submit</button>
    </form>
    </div>
}
