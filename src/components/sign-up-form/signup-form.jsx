import { useState } from "react"

export default function SignUpForm() {
    const defaultFormFields = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, email, password, confirmPassword } = formFields;
    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => { }}>
                <label for="uname">Username</label>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter Username"
                    onChange={handleChange}
                    value={username}
                    required />

                <label for="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={email}
                    required />

                <label for="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={password}
                    required />

                <label for="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={confirmPassword}
                    required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}