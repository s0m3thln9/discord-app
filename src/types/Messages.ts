export type SuccessMessage<Messages, Payload> = {
	success: true
	message: Messages
	payload?: Payload
}

export type ErrorMessage<Messages> = {
	success: false
	message: Messages | 'Server error'
}
