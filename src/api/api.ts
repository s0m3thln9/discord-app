import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	GetUserWithCredentialsResponse,
	GetUserWithJwtResponse,
	LoginUserData,
	RegisterResponse,
} from '../types/AuthProvider.ts'
import { GetFriendsResponse } from '../types/friends.ts'
import { GetGroupsResponse } from '../types/groups.ts'
import { RegisterUserData, UpdateUserData, UpdateUserResponse } from '../types/user.ts'

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

		getFriends: builder.query<GetFriendsResponse, void>({
			query: () => ({
				url: 'friends/get',
			}),
		}),

		getGroups: builder.query<GetGroupsResponse, void>({
			query: () => ({
				url: 'group/get',
			}),
		}),

		updateUser: builder.mutation<UpdateUserResponse, UpdateUserData>({
			query: updateUserData => ({
				url: '/user/update',
				method: 'POST',
				body: updateUserData,
			}),
		}),
	}),
})

export const {
	useLoginUserWithCredentialsMutation,
	useRegisterUserMutation,
	useLoginUserWithJwtQuery,
	useGetFriendsQuery,
	useGetGroupsQuery,
	useUpdateUserMutation,
} = api
