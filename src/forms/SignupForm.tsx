import { useState } from "react"
import { toast } from "react-toastify"
import { emailRegex, passwordRegex } from "@julseb-lib/utils"
import { Form, Input, InputCheck } from "components"
import { PATHS, COMMON_TEXTS } from "data"

export const SignupForm = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		email: "",
		password: "",
	})
	const [saveEmail, setSaveEmail] = useState<boolean>(false)

	const [validation, setValidation] = useState<{
		fullName: undefined | boolean
		email: undefined | boolean
		password: undefined | boolean
	}>({
		fullName: undefined,
		email: undefined,
		password: undefined,
	})

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setInputs({ ...inputs, [e.target.id]: e.target.value })

	const handleCheck = (e: ChangeEvent<HTMLInputElement>) =>
		setSaveEmail(e.target.checked)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (
			!inputs.fullName ||
			!emailRegex.test(inputs.email) ||
			!passwordRegex.test(inputs.password)
		) {
			setValidation({
				fullName:
					validation.fullName !== undefined
						? !inputs.fullName
							? false
							: true
						: !inputs.fullName
							? false
							: undefined,
				email: validation.email
					? !emailRegex.test(inputs.email)
						? false
						: true
					: !emailRegex.test(inputs.email)
						? false
						: undefined,
				password: validation.password
					? !passwordRegex.test(inputs.password)
						? false
						: true
					: !passwordRegex.test(inputs.password)
						? false
						: undefined,
			})
			return
		}
	}

	return (
		<Form
			buttonPrimary="Create a new account"
			buttonSecondary={{ text: "Cancel", href: PATHS.ROOT }}
			onSubmit={handleSubmit}
		>
			<Input
				label="Full name"
				value={inputs.fullName}
				onChange={handleInputs}
				id="fullName"
				validation={{
					status: validation.fullName,
					message: COMMON_TEXTS.ERRORS.FULL_NAME_EMPTY,
				}}
				autoFocus
			/>

			<Input
				label="Email"
				value={inputs.email}
				onChange={handleInputs}
				validation={{
					status: validation.email,
					message: COMMON_TEXTS.ERRORS.EMAIL_NOT_VALID,
				}}
				id="email"
			/>

			<Input
				label="Password"
				type="password"
				value={inputs.password}
				onChange={handleInputs}
				id="password"
				validation={{
					status: validation.email,
					message: COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID,
				}}
			/>

			<InputCheck
				id="save"
				label="Save your email for faster login?"
				checked={saveEmail}
				onChange={handleCheck}
			/>
		</Form>
	)
}
