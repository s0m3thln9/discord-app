import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	GetUserWithCredentialsResponse,
	GetUserWithJwtResponse,
	LoginUserData,
	RegisterResponse,
} from '../types/AuthProvider.ts'
import { GetFriendsResponse } from '../types/friends.ts'
import { GetGroupsResponse } from '../types/groups.ts'
import { RegisterUserData, UpdateDisplayNameResponse, UpdateUsernameResponse } from '../types/user.ts'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5555/',
		credentials: 'include',
	}),
	endpoints: builder => ({
		loginUserWithCredentials: builder.mutation<GetUserWithCredentialsResponse, LoginUserData>({
			query: userData => ({
				url: 'login',
				method: 'POST',
				body: userData,
			}),
		}),

		registerUser: builder.mutation<RegisterResponse, RegisterUserData>({
			query: userData => ({
				url: 'register',
				method: 'POST',
				body: userData,
			}),
		}),

		loginUserWithJwt: builder.query<GetUserWithJwtResponse, void>({
			query: () => ({
				url: 'login',
			}),
		}),

		getFriends: builder.mutation<GetFriendsResponse, void>({
			query: () => ({
				url: 'friends/get',
				method: 'GET',
			}),
		}),

		getGroups: builder.mutation<GetGroupsResponse, void>({
			query: () => ({
				url: 'group/get',
				method: 'GET',
			}),
		}),

		updateDisplayName: builder.mutation<UpdateDisplayNameResponse, { displayName: string }>({
			query: newDisplayName => ({
				url: '/user/updateDisplayName',
				method: 'POST',
				body: newDisplayName,
			}),
		}),

		updateUsername: builder.mutation<UpdateUsernameResponse, { username: string; password: string }>({
			query: updateUsername => ({
				url: '/user/updateUsername',
				method: 'POST',
				body: updateUsername,
			}),
		}),
	}),
})

export const {
	useLoginUserWithCredentialsMutation,
	useRegisterUserMutation,
	useLoginUserWithJwtQuery,
	useGetFriendsMutation,
	useGetGroupsMutation,
	useUpdateDisplayNameMutation,
	useUpdateUsernameMutation,
} = api
