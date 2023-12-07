import { useState } from "react"

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)

export default function SignUpForm() {
    async function handleSubmit(event) {
        event.preventDefault()
        console.log("yup")
    }
    return <div><h2> Sign up! </h2>
    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input value={password} onChange={(b) => setPassword(b.target.value)}/>
        </label>
        <button> Submit</button>
    </form>
    </div>
}
