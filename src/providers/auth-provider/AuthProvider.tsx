'use client'

import { Context, createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import {
	GetUserWithCredentials, GetUserWithJwtResponse,
	LoginUserData,
	RegisterResponse,
	RegisterUserData,
	TAuthProvider,
	User,
} from '../../types/AuthProvider.ts'
import { useNavigate } from 'react-router-dom'


export let AuthContext: Context<TAuthProvider>

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)
	const [isAuth, setIsAuth] = useState(false)

	const pathname = window.location.href
	const navigate = useNavigate()

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
			setUser(data.payload.user)
			setIsAuth(true)
			navigate('/')
		}
	}

	const logout = () => {
		Cookies.remove('jwt')
		setIsAuth(false)
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

		if (!jwt && pathname !== '/register') {
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
						setIsAuth(true)
						setUser(data.payload.user)
					} else {
						Cookies.remove('jwt')
						setIsAuth(false)
						navigate('/login')
					}
				})
		}
	}, [pathname, navigate])


	AuthContext = createContext<TAuthProvider>({
		user: null,
		login,
		logout,
		isAuth,
		register,
	})

	return <AuthContext.Provider value={{ user, login, logout, isAuth, register }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
	return useContext(AuthContext)
}
