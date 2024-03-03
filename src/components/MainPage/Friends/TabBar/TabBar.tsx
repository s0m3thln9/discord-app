import Button from '../../../UI/Button/Button.tsx'

const TabBar = () => {
	return (
		<ul className={'flex h-6 before:ml-4 before:mr-2 before:w-[1px] before:bg-[#3f4147]'}>
			<li className={'mx-2 flex'}>
				<Button variant={'active'} className={'h-full'}>
					Online
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button variant={'text'} className={'h-full'}>
					All
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button variant={'text'} className={'h-full'}>
					Pending
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button variant={'text'} className={'h-full'}>
					Blocked
				</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button
					variant={'text'}
					className={'h-full bg-[#248046] text-[#fff] hover:bg-[#248046] hover:text-[#fff]'}
				>
					Add Friend
				</Button>
			</li>
		</ul>
	)
}

export default TabBar
