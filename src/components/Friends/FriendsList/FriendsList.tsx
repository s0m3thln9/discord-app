import { useAppSelector } from '../../../hooks/typedHooks.ts'
import FriendItem from './FriendItem/FriendItem.tsx'

const FriendsList = () => {
	const friends = useAppSelector(state => state.friends.friends)
	return (
		<section className={'flex flex-col grow'}>
			<input
				type="text"
				placeholder={'Search'}
				className={'bg-[#1e1f22] mt-4 mr-5 ml-[1.875rem] rounded px-2 h-[1.875rem] text-[#f2f3f5]'}
			/>
			<h2 className={'mt-4 mr-5 mb-2 ml-[1.875rem] uppercase text-[#b5bac1] font-semibold text-xs'}>
				Online - {friends.length}
			</h2>
			<ul className={'grow overflow-y-scroll'}>
				{friends.map(friend => (
					<FriendItem friend={friend} key={friend.id} />
				))}
			</ul>
		</section>
	)
}

export default FriendsList
