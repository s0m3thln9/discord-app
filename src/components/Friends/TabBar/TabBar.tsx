import TextButton from '../../UI/Button/TextButton.tsx'

type Tab = {
	id: number
	text: string
	variant?: 'dark' | 'ghost' | 'green'
	active?: true
}

const TabBar = () => {
	const tabs: Tab[] = [
		{
			id: 1,
			text: 'Online',
			active: true,
		},
		{
			id: 2,
			text: 'All',
		},
		{
			id: 3,
			text: 'Pending',
		},
		{
			id: 4,
			text: 'Blocked',
		},
		{
			id: 5,
			text: 'Add Friend',
			variant: 'green',
		},
	]

	return (
		<ul className={'flex before:w-[1px] before:ml-4 before:mr-2 h-6 before:bg-[#3f4147]'}>
			{tabs.map(tab => (
				<li key={tab.id} className={'flex mx-2'}>
					<TextButton active={tab.active} variant={tab.variant}>
						{tab.text}
					</TextButton>
				</li>
			))}
		</ul>
	)
}

export default TabBar
