import { Friends } from '../../../public/svgs.tsx'
import TabBar from './TabBar/TabBar.tsx'
import ToolBar from './ToolBar/ToolBar.tsx'
import ActiveNow from './ActiveNow/ActiveNow.tsx'
import FriendsList from './FriendsList/FriendsList.tsx'

const FriendsSection = () => {
	return (
		<main className={'grow'}>
			<section className={'border-b-[1px] border-[#202225] h-12 pt-2.5 p-2.5 flex items-center justify-between'}>
				<div className={'flex items-center'}>
					<div className={'flex items-center'}>
						<Friends fill={'#80848e'} className={'mx-2'} />
						<h2 className={'font-semibold text-[#f2f3f5] cursor-default'}>Friends</h2>
					</div>
					<TabBar />
				</div>
				<ToolBar />
			</section>
			<div className={'flex h-[calc(100svh-3rem)]'}>
				<FriendsList />
				<ActiveNow />
			</div>
		</main>
	)
}

export default FriendsSection
