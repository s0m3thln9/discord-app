'use client'

import { Context, createContext, ReactNode, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import {
	GetUserWithCredentials,
	GetUserWithJwtResponse,
	LoginUserData,
	RegisterResponse,
	RegisterUserData,
	TAuthProvider,
} from '../../types/AuthProvider.ts'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/typedHooks.ts'
import { authUser, logOut } from '../../store/slices/authUserSlice.ts'

export let AuthContext: Context<TAuthProvider>

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const pathname = window.location.href
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const login = async (userData: LoginUserData) => {
		const response = await fetch(`http://localhost:5555/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify(userData),
		})
		const data: GetUserWithCredentials = await response.json()
		console.log(data)
		if (data.success && data.payload) {
			dispatch(authUser(data.payload.user))
			navigate('/')
		}
	}

	const logout = () => {
		Cookies.remove('jwt')
		dispatch(logOut())
		navigate('/login')
	}

	const register = async (userData: RegisterUserData) => {
		const response = await fetch(`http://localhost:5555/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		})
		const data: RegisterResponse = await response.json()
		console.log(data)
		if (data.success) {
			navigate('/login')
		}
	}

	useEffect(() => {
		const jwt = Cookies.get('jwt')

		if (!jwt && pathname !== 'http://localhost:5173/register') {
			navigate('/login')
		}
		if (jwt) {
			fetch('http://localhost:5555/login', {
				method: 'GET',
				credentials: 'include',
			})
				.then(response => response.json())
				.then((data: GetUserWithJwtResponse) => {
					if (data.success && data.payload) {
						dispatch(authUser(data.payload.user))
					} else {
						logout()
					}
				})
		}
	}, [pathname, navigate])

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
