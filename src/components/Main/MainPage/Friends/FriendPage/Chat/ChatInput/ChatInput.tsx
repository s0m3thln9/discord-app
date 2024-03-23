import { GIF, PlusCircle, Present } from '../../../../../../../assets/svgs.tsx'
import Button from '../../../../../../UI/Button/Button.tsx'
import Tooltip from '../../../../../../UI/Tooltip/Tooltip.tsx'
import { useEffect, useState } from 'react'

type Props = {
	handleSend: (newMessageText: string) => void
	displayName: string
}

const ChatInput = ({ handleSend, displayName }: Props) => {
	const [newMessageText, setNewMessageText] = useState('')

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				handleSend(newMessageText)
				setNewMessageText('')
			}
		}
		const input = document.querySelector<HTMLInputElement>('#newMessageInput')
		input?.addEventListener('keydown', handleKeyDown)

		return () => {
			input?.removeEventListener('keydown', handleKeyDown)
		}
	}, [newMessageText])

	return (
		<div id={'newMessageInput'} className={'mx-4 mb-4 flex items-center rounded-lg bg-hover'}>
			<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
				<PlusCircle className={'fill-[#b0b8c0] group-hover/iconBtn:fill-[#dbdee1]'} />
			</Button>
			<input
				type="text"
				placeholder={`Message @${displayName}`}
				className={'grow bg-[transparent] text-white placeholder:text-[#5f6169]'}
				value={newMessageText}
				onChange={e => setNewMessageText(e.target.value)}
			/>
			<Tooltip
				text={'Upgrade your friends! Gift them awesome chat perks with Nitro.'}
				vertical={'top'}
				horizontal={'center'}
				width={'md'}
			>
				<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
					<Present className={'mx-1 fill-[#b0b8c0] group-hover/iconBtn:fill-[#dbdee1]'} />
				</Button>
			</Tooltip>

			<GIF className={'mx-1 fill-[#b0b8c0]'} />
		</div>
	)
}

export default ChatInput
