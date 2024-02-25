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
			friends.forEach(friends => {
				state.channels.push({
					id: friends.id,
					image: friends.userImage,
					name: friends.displayName,
					type: 'user',
					color: friends.color,
					onlineStatus: friends.onlineStatus,
				})
			})
		},
		addGroupsToChannels: (state, action: PayloadAction<Group[]>) => {
			const groups = action.payload
			groups.forEach(group => {
				state.channels.push({
					id: group.id,
					image: group.image,
					name: group.name,
					type: 'group',
					color: group.color,
					onlineStatus: 'group',
				})
			})
		},
	},
})

export const { addFriendsToChannels, addGroupsToChannels } = chatsSlice.actions

export default chatsSlice.reducer
