import { useState } from "react"
import {
	emailRegex,
	passwordRegex,
	getRandomString,
	getRandomAvatar,
} from "@julseb-lib/utils"
import { Form, Input, InputCheck, ErrorMessage } from "components"
import { PATHS, COMMON_TEXTS, SERVER_PATHS } from "data"

export const SignupForm = () => {
	const [inputs, setInputs] = useState({
		fullName: "Julien Sebag",
		email: "julien.sebag@email.com",
		password: "Password42",
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
	const [errorMessage, setErrorMessage] = useState<undefined | string>(
		undefined,
	)

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

		const requestBody = {
			...inputs,
			verified: false,
			verifyToken: getRandomString(),
			avatar: getRandomAvatar(),
			role: "user",
		}

		if (saveEmail) {
			localStorage.setItem("email", inputs.email)
		}

		await fetch(SERVER_PATHS.USER.CREATE_USER, {
			method: "POST",
			body: JSON.stringify(requestBody),
		}).then(res => {
			if (res.status === 400) {
				setErrorMessage(res.statusText)
				return
			}
			window.location.href = PATHS.THANK_YOU
		})
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

			<ErrorMessage message={errorMessage} />
		</Form>
	)
}
