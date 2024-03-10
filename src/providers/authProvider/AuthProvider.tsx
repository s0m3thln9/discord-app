'use client'

import { Context, createContext, ReactNode, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { LoginUserData, TAuthProvider } from '../../types/AuthProvider.ts'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/typedHooks.ts'
import { authUser, logOut } from '../../store/slices/authUserSlice.ts'
import {
	useLoginUserWithCredentialsMutation,
	useLoginUserWithJwtQuery,
	useRegisterUserMutation,
} from '../../api/api.ts'
import { RegisterCredentials } from '../../types/user.ts'

export let AuthContext: Context<TAuthProvider>

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [loginUser] = useLoginUserWithCredentialsMutation()
	const [registerUser] = useRegisterUserMutation()
	const { data, isLoading } = useLoginUserWithJwtQuery()

	const login = async (userData: LoginUserData) => {
		const data = await loginUser(userData).unwrap()
		if (data.success && data.payload) {
			navigate('/')
			dispatch(authUser(data.payload.user))
		}
	}

	const logout = () => {
		Cookies.remove('jwt')
		dispatch(logOut())
		navigate('/login')
	}

	const register = async (userData: RegisterCredentials) => {
		const data = await registerUser(userData).unwrap()
		if (data.success) {
			navigate('/login')
		}
	}

	useEffect(() => {
		if (!isLoading) {
			if (data && data.success && data.payload) {
				dispatch(authUser(data.payload.user))
			} else {
				logout()
			}
		}
	}, [isLoading])

	AuthContext = createContext<TAuthProvider>({
		login,
		logout,
		register,
	})

	return <AuthContext.Provider value={{ login, logout, register }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
	return useContext(AuthContext)
}
