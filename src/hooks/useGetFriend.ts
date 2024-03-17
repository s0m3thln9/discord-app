import { useAppSelector } from './typedHooks.ts'

const useGetFriend = (id: string | undefined) => {
	const users = useAppSelector(state => state.friends.friends)
	return users.find(f => f.id === +(id || '0'))
}

export default useGetFriend
