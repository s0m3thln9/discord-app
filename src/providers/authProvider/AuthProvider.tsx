'use client'

import { Context, createContext, ReactNode, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { LoginWithCredentialsResponse, RegisterResponse, TAuthProvider } from '../../types/AuthProvider.ts'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/typedHooks.ts'
import { authUser, logOut } from '../../store/slices/authUserSlice.ts'
import { useLoginUserWithJwtQuery } from '../../api/api.ts'
import { clearDirectMessages } from '../../store/slices/directMessagesSlice.ts'

export let AuthContext: Context<TAuthProvider>

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { data, isLoading } = useLoginUserWithJwtQuery()

	const login = async (response: LoginWithCredentialsResponse) => {
		if (response.success && response.payload) {
			navigate('/')
			dispatch(authUser(response.payload.user))
		}
	}

	const logout = () => {
		Cookies.remove('jwt')
		dispatch(logOut())
		dispatch(clearDirectMessages())
		navigate('/login')
	}

	const register = async (response: RegisterResponse) => {
		if (response.success) {
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
