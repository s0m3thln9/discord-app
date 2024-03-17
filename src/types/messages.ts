export type NewMessageBody = {
	text: string
	username: string
	receiverId: number
	jwt: string
}

export type Message = {
	id: number
	text: string
	senderId: number
	receiverId: number
	createdAt: Date
	updatedAt: Date
}
