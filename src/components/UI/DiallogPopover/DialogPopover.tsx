import Button from '../Button/Button'

type Props = {
	title: string
	content: string
	isOpen: boolean
	setIsOpen: (value: boolean) => void
	dangerAction: () => void
}

const DialogPopover = ({ title, content, isOpen, setIsOpen, dangerAction }: Props) => {
	return (
		<div
			className={`absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[rgba(0,0,0,0.7)] p-4 transition duration-300
				${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
				`}
			onClick={e => {
				if (e.target === e.currentTarget) {
					setIsOpen(false)
				}
			}}
		>
			<div
				className={`flex min-h-[12.5rem] min-w-[28rem] flex-col justify-between rounded bg-content transition duration-300 ${isOpen ? 'scale-100' : 'scale-75'}`}
			>
				<div>
					<h2 className={'text-md p-4 text-[white]'}>{title}</h2>
					<p className={'px-4 pb-4'}>{content}</p>
				</div>
				<div className={'mt-4 flex justify-end bg-sidebar p-4'}>
					<Button
						variant={'text'}
						className={'px-6 py-2 text-[white] hover:bg-[none] hover:underline'}
						onClick={() => {
							setIsOpen(false)
						}}
					>
						Cancel
					</Button>
					<Button
						variant={'danger'}
						className={'px-6 py-2 text-[white] transition hover:bg-[#a12828] hover:text-[white]'}
						onClick={dangerAction}
					>
						Log Out
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DialogPopover
