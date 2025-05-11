import { useState } from "react"
import { toast } from "react-toastify"
import { Form, Input, InputCheck, ErrorMessage } from "components"
import { PATHS } from "data"

export const LoginForm = () => {
	const [inputs, setInputs] = useState({
		email: "julien@email.com",
		password: "Password42",
	})
	const [saveEmail, setSaveEmail] = useState(false)

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setInputs({ ...inputs, [e.target.id]: e.target.value })

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
	}

	return (
		<Form
			buttonPrimary="Login"
			buttonSecondary={{ text: "Cancel", href: PATHS.ROOT }}
			onSubmit={handleSubmit}
		>
			<Input
				id="email"
				label="Email"
				value={inputs.email}
				onChange={handleInputs}
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				value={inputs.password}
				onChange={handleInputs}
			/>
			<InputCheck
				id="saveEmail"
				label="Save your email for faster login?"
				checked={saveEmail}
				onChange={e => setSaveEmail(e.target.checked)}
			/>
		</Form>
	)
}
