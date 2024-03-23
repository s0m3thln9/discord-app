import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	LoginUserData,
	LoginWithCredentialsResponse,
	LoginWithJwtResponse,
	RegisterResponse,
} from '../types/AuthProvider.ts'
import {
	DeleteFriendRequestResponse,
	GetFriendRequestsResponse,
	GetFriendsResponse,
	SendFriendRequestResponse,
} from '../types/friends.ts'
import { GetGroupsResponse } from '../types/groups.ts'
import {
	RegisterCredentials,
	UpdateDisplayNameResponse,
	UpdatePhoneNumberResponse,
	UpdateUsernameResponse,
} from '../types/user.ts'
import { CountryForSelect } from '../components/Main/SettingsPage/Content/MyAccount/countriesForSelect.ts'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5555/',
		credentials: 'include',
	}),
	endpoints: builder => ({
		loginUserWithCredentials: builder.mutation<LoginWithCredentialsResponse, LoginUserData>({
			query: userData => ({
				url: 'login/credentials',
				method: 'POST',
				body: userData,
			}),
		}),

		registerUser: builder.mutation<RegisterResponse, RegisterCredentials>({
			query: userData => ({
				url: 'register',
				method: 'POST',
				body: userData,
			}),
		}),

		loginUserWithJwt: builder.query<LoginWithJwtResponse, void>({
			query: () => ({
				url: 'login/jwt',
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

		getFriendRequests: builder.mutation<GetFriendRequestsResponse, void>({
			query: () => ({
				url: 'friendsRequest/get',
				method: 'GET',
			}),
		}),

		sendFriendRequest: builder.mutation<SendFriendRequestResponse, { username: string }>({
			query: friendUsername => ({
				url: 'friendsRequest/send',
				method: 'POST',
				body: friendUsername,
			}),
		}),

		acceptFriendRequest: builder.mutation<SendFriendRequestResponse, { requestId: number }>({
			query: requestId => ({
				url: 'friendsRequest/accept',
				method: 'POST',
				body: requestId,
			}),
		}),

		deleteFriendRequest: builder.mutation<DeleteFriendRequestResponse, { requestId: number }>({
			query: requestId => ({
				url: 'friendsRequest/delete',
				method: 'POST',
				body: requestId,
			}),
		}),

		uploadFile: builder.mutation({
			query: (file: File) => {
				const formData = new FormData()
				formData.append('file', file)
				return {
					url: 'user/uploadUserImage',
					method: 'POST',
					body: formData,
				}
			},
		}),

		updatePhoneNumber: builder.mutation<UpdatePhoneNumberResponse, CountryForSelect & { phoneNum: string }>({
			query: (country: CountryForSelect & { phoneNum: string }) => ({
				url: 'user/updatePhoneNumber',
				method: 'POST',
				body: {
					code: +country.code,
					phoneNumber: country.phoneNum,
				},
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
	useGetFriendRequestsMutation,
	useSendFriendRequestMutation,
	useAcceptFriendRequestMutation,
	useDeleteFriendRequestMutation,
	useUploadFileMutation,
	useUpdatePhoneNumberMutation,
} = api
