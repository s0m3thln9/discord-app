import Button from '../../../UI/Button/Button.tsx'
import { Filter } from '../Friends.tsx'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

type Props = {
	filter: Filter
	setFilter: (filter: Filter) => void
}

const TabBar = ({ setFilter, filter }: Props) => {
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
					className={'h-full'}
					onClick={() => {
						setFilter('pending')
					}}
				>
					Pending
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
						clsx('h-full bg-[#248046] text-[#fff] hover:bg-[#248046] hover:text-[#fff]'),
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
