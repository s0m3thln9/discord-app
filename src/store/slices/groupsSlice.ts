import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetGroupsResponse, Group } from '../../types/groups.ts'

type InitialState = {
	groups: Group[]
}

const initialState: InitialState = {
	groups: [],
}

export const groupsSlice = createSlice({
	name: 'groups',
	initialState,
	reducers: {
		addGroups: (state, action: PayloadAction<GetGroupsResponse>) => {
			if (!action.payload.success) {
				return state
			}
			state.groups = action.payload.payload?.groups || []
		},
	},
})

export const { addGroups } = groupsSlice.actions

export default groupsSlice.reducer
