import TabBar from './TabBar/TabBar.tsx'
import ToolBar from './ToolBar/ToolBar.tsx'
import ActiveNow from './ActiveNow/ActiveNow.tsx'
import FriendsList from './FriendsList/FriendsList.tsx'
import { useState } from 'react'
import AddingFriends from './AddingFriends/AddingFriends.tsx'
import { Friends } from '../../../../assets/svgs.tsx'

export type Filter = 'all' | 'online' | 'pending' | 'blocked' | 'addFriends'

const FriendsSection = () => {
	const [filter, setFilter] = useState<Filter>('pending')
	return (
		<main className={'grow'}>
			<section className={'flex h-12 items-center justify-between border-b-[1px] border-[#202225] p-2.5 pt-2.5'}>
				<div className={'flex items-center'}>
					<div className={'flex items-center'}>
						<Friends fill={'#80848e'} className={'mx-2'} />
						<h2 className={'cursor-default font-semibold text-white'}>Friends</h2>
					</div>
					<TabBar setFilter={setFilter} filter={filter} />
				</div>
				<ToolBar />
			</section>
			<div className={'flex h-[calc(100svh-3rem)]'}>
				{filter === 'addFriends' ? <AddingFriends /> : <FriendsList filter={filter} />}
				<ActiveNow />
			</div>
		</main>
	)
}

export default FriendsSection
