import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PublicUser } from '../../types/AuthProvider.ts'
import { Group } from '../../types/groups.ts'

export type Channel = {
	id: number
	image: string | null
	name: string
	type: 'user' | 'group'
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | 'group'
	members: number | null
}

type InitialState = {
	channels: Channel[]
}

const initialState: InitialState = {
	channels: [],
}

export const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		addFriendsToChannels: (state, action: PayloadAction<PublicUser[]>) => {
			const friends = action.payload
			friends.forEach(friend => {
				if (!state.channels.find(channel => channel.id === friend.id && channel.type === 'user')) {
					state.channels.push({
						id: friend.id,
						image: friend.userImage,
						name: friend.displayName,
						type: 'user',
						color: friend.color,
						onlineStatus: friend.onlineStatus,
						members: null,
					})
				}
			})
		},
		addGroupsToChannels: (state, action: PayloadAction<Group[]>) => {
			const groups = action.payload
			groups.forEach(group => {
				if (!state.channels.find(channel => channel.id === group.id && channel.type === 'group')) {
					state.channels.push({
						id: group.id,
						image: group.image,
						name: group.name,
						type: 'group',
						color: group.color,
						onlineStatus: 'group',
						members: group.members,
					})
				}
			})
		},
	},
})

export const { addFriendsToChannels, addGroupsToChannels } = chatsSlice.actions

export default chatsSlice.reducer
