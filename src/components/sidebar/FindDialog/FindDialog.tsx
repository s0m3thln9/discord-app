import Button from '../../UI/Button/Button.tsx'

const FindDialog = () => {
	return (
		<section className={'h-12 border-b-[1px] border-[#202225] p-2.5 pt-2.5'}>
			<Button
				className={'h-7 justify-start bg-[#1e1f22] text-sm hover:bg-[#1e1f22] hover:text-[#949ba4]'}
				variant={'text'}
			>
				Find or start a conversation
			</Button>
		</section>
	)
}

export default FindDialog
