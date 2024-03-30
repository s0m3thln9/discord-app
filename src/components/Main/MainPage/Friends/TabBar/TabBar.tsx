import Button from '../../../../UI/Button/Button.tsx'
import { Filter } from '../Friends.tsx'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'

type Props = {
	filter: Filter
	setFilter: (filter: Filter) => void
}

const TabBar = ({ setFilter, filter }: Props) => {
	const notifications = useAppSelector(state => state.friendRequests.notifications)
	return (
		<ul className={'flex h-6 before:ml-4 before:mr-2 before:w-[1px] before:bg-[#3f4147]'}>
			<li className={'mx-2 flex'}>
				<Button
					variant={filter === 'online' ? 'active' : 'text'}
					className={'h-full'}
					onClick={() => {
						setFilter('online')
					}}
				>
					Online
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button
					variant={filter === 'all' ? 'active' : 'text'}
					className={'h-full'}
					onClick={() => {
						setFilter('all')
					}}
				>
					All
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button
					variant={filter === 'pending' ? 'active' : 'text'}
					className={'relative flex h-full items-center'}
					onClick={() => {
						setFilter('pending')
					}}
				>
					Pending
					{notifications > 0 && (
						<span
							className={
								'ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#f23f43] text-[0.75rem] font-bold text-white'
							}
						>
							{notifications}
						</span>
					)}
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button
					variant={filter === 'blocked' ? 'active' : 'text'}
					className={'h-full'}
					onClick={() => {
						setFilter('blocked')
					}}
				>
					Blocked
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button
					variant={'text'}
					className={twMerge(
						clsx('h-full text-nowrap bg-[#248046] text-[#fff] hover:bg-[#248046] hover:text-[#fff]'),
						filter === 'addFriends' && 'bg-content text-[#2dc770] hover:bg-content hover:text-[#2dc770]',
					)}
					onClick={() => {
						setFilter('addFriends')
					}}
				>
					Add Friend
				</Button>
			</li>
		</ul>
	)
}

export default TabBar
