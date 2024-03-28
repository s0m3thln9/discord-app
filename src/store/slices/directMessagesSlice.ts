import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Group } from '../../types/groups.ts'
import { NoImageColors, UserWithoutPassword } from '../../types/user.ts'

export type DirectMessageChannel = {
	id: number
	image: string | null
	name: string
	type: 'user' | 'group'
	color: NoImageColors
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | false
	members: number | null
	chatId: number
}

type InitialState = {
	directMessages: DirectMessageChannel[]
}

const initialState: InitialState = {
	directMessages: [],
}

export const directMessagesSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		addFriendToDirectMessages: (state, action: PayloadAction<UserWithoutPassword & { chatId: number }>) => {
			const friend = action.payload
			if (!state.directMessages.find(channel => channel.id === friend.id && channel.type === 'user')) {
				state.directMessages.push({
					id: friend.id,
					image: friend.userImage,
					name: friend.displayName,
					type: 'user',
					color: friend.color,
					onlineStatus: friend.onlineStatus,
					members: null,
					chatId: friend.chatId,
				})
			}
		},
		addFriendsToDirectMessages: (state, action: PayloadAction<(UserWithoutPassword & { chatId: number })[]>) => {
			const friends = action.payload
			friends.forEach(friend => {
				if (!state.directMessages.find(channel => channel.id === friend.id && channel.type === 'user')) {
					state.directMessages.push({
						id: friend.id,
						image: friend.userImage,
						name: friend.displayName,
						type: 'user',
						color: friend.color,
						onlineStatus: friend.onlineStatus,
						members: null,
						chatId: friend.chatId,
					})
				}
			})
		},
		addGroupsToDirectMessages: (state, action: PayloadAction<Group[]>) => {
			const groups = action.payload
			groups.forEach(group => {
				if (
					!state.directMessages.find(
						directMessage => directMessage.id === group.id && directMessage.type === 'group',
					)
				) {
					state.directMessages.push({
						id: group.id,
						image: group.image,
						name: group.name,
						type: 'group',
						color: group.color,
						onlineStatus: false,
						members: group.members,
						chatId: group.chatId,
					})
				}
			})
		},
		clearDirectMessages: state => {
			state.directMessages = []
		},
	},
})

export const { addFriendsToDirectMessages, addGroupsToDirectMessages, clearDirectMessages, addFriendToDirectMessages } =
	directMessagesSlice.actions

export default directMessagesSlice.reducer
