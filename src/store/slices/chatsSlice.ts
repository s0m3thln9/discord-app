import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Group } from '../../types/groups.ts'
import { NoImageColors, UserShowableData } from '../../types/user.ts'

export type Channel = {
	id: number
	image: string | null
	name: string
	type: 'user' | 'group'
	color: NoImageColors
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | false
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
		addFriendToChannels: (state, action: PayloadAction<UserShowableData>) => {
			const friend = action.payload
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
		},
		addFriendsToChannels: (state, action: PayloadAction<UserShowableData[]>) => {
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
						onlineStatus: false,
						members: group.members,
					})
				}
			})
		},
		clearChannels: state => {
			state.channels = []
		},
	},
})

export const { addFriendsToChannels, addGroupsToChannels, clearChannels, addFriendToChannels } = chatsSlice.actions

export default chatsSlice.reducer
