import { Link } from 'react-router-dom'
import { DirectMessageChannel } from '../../../../../../store/slices/directMessagesSlice.ts'
import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import ContextMenu from '../../../../../UI/ContextMenu/ContextMenu.tsx'
import { useState } from 'react'
import { Close } from '../../../../../../assets/svgs.tsx'

type Props = {
	directMessage: DirectMessageChannel
	chatId: number
}

const DirectMessage = ({ directMessage, chatId }: Props) => {
	const [isContextMenuShon, setIsContextMenuShown] = useState(false)

	return (
		<li key={`${directMessage.id}${directMessage.type}`} className={'relative pt-0.5'}>
			<Link
				to={`/${chatId}`}
				className={
					'group flex h-[2.625rem] items-center justify-between rounded px-2 text-[#949ba4] hover:bg-[#35373c] hover:no-underline'
				}
			>
				<div className={'flex w-[12.75rem] items-center'}>
					<UserImage
						image={directMessage.image || ''}
						color={directMessage.color}
						onlineStatus={directMessage.onlineStatus}
						tooltip={true}
						bgColor={'sidebar'}
						size={'md'}
						isGroup={directMessage.type === 'group'}
					/>
					<div className={'ml-3 flex w-full grow flex-col justify-center leading-none'}>
						<p
							className={
								'w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium group-hover:w-[8.25rem] group-hover:text-[#dbdee1]'
							}
						>
							{directMessage.name}
						</p>
						{directMessage.members ? <p className={'text-xs'}>{directMessage.members} Members</p> : ''}
					</div>
				</div>
				<div className={'group hidden p-1 group-hover:flex'}>
					<Close className={'h-3 w-3 group-hover:fill-[#dbdee1]'} />
				</div>
			</Link>
			<ContextMenu isShown={isContextMenuShon} setIsShown={setIsContextMenuShown}>
				<p>some Shit</p>
			</ContextMenu>
		</li>
	)
}

export default DirectMessage
