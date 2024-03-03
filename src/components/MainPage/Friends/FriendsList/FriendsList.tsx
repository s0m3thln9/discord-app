import { useAppSelector } from '../../../../hooks/typedHooks.ts'
import FriendItem from './FriendItem/FriendItem.tsx'

const FriendsList = () => {
	const friends = useAppSelector(state => state.friends.friends)
	return (
		<section className={'flex grow flex-col'}>
			<input
				type="text"
				placeholder={'Search'}
				className={'ml-[1.875rem] mr-5 mt-4 h-[1.875rem] rounded bg-[#1e1f22] px-2 text-[#f2f3f5]'}
			/>
			<h2 className={'mb-2 ml-[1.875rem] mr-5 mt-4 text-xs font-semibold uppercase text-[#b5bac1]'}>
				Online - {friends.length}
			</h2>
			<ul className={'grow'}>
				{friends.map(friend => (
					<FriendItem friend={friend} key={friend.id} />
				))}
			</ul>
		</section>
	)
}

export default FriendsList
