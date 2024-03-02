import Button from '../../UI/Button/Button.tsx'

const TabBar = () => {
	return (
		<ul className={'flex h-6 before:ml-4 before:mr-2 before:w-[1px] before:bg-[#3f4147]'}>
			<li className={'mx-2 flex'}>
				<Button variant={'active'}>Online</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button variant={'text'}>All</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button variant={'text'}>Pending</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button variant={'text'}>Blocked</Button>
			</li>
			<li className={'mx-2 flex'}>
				<Button variant={'text'} className={'bg-[#248046] text-[#fff] hover:bg-[#248046] hover:text-[#fff]'}>
					Add Friend
				</Button>
			</li>
		</ul>
	)
}

export default TabBar
