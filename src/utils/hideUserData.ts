export const getHiddenPhoneNumber = (phoneNumber: string) => {
	let hiddenNumber = phoneNumber.substring(phoneNumber.length - 5, phoneNumber.length - 1)
	let number = '*'.repeat(phoneNumber.length - 4 + 1)
	number += hiddenNumber
	return number
}

export const getHiddenEmail = (email: string) => {
	const atIndex = email.indexOf('@')
	if (atIndex !== -1) {
		const hiddenPart = '*'.repeat(atIndex)
		return hiddenPart + email.substring(atIndex)
	}
	return email
}
