import { Link } from 'react-router-dom'
import { DirectMessageChannel } from '../../../../../../store/slices/directMessagesSlice.ts'
import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import ContextMenu from '../../../../../UI/ContextMenu/ContextMenu.tsx'
import { useState } from 'react'
import { Close } from '../../../../../../assets/svgs.tsx'
import { clsx } from 'clsx'

type Props = {
	directMessage: DirectMessageChannel
	chatId: number
}

const DirectMessage = ({ directMessage, chatId }: Props) => {
	const pathname = window.location.href
	const [isContextMenuShon, setIsContextMenuShown] = useState(false)

	return (
		<li key={`${directMessage.id}${directMessage.type}`} className={'relative pt-0.5'}>
			<Link
				to={`/${chatId}`}
				className={clsx(
					'group flex h-[2.625rem] items-center justify-between rounded px-2 text-[#949ba4] hover:bg-[#35373c] hover:no-underline',
					pathname === `http://localhost:5173/${chatId}` && 'bg-[#404249]',
				)}
			>
				<div className={'flex w-[12.75rem] items-center'}>
					<UserImage
						image={directMessage.image || ''}
						color={directMessage.color}
						onlineStatus={directMessage.onlineStatus}
						tooltip={true}
						bgColor={pathname === `http://localhost:5173/${chatId}` ? 'choosed' : 'sidebar'}
						size={'md'}
						isGroup={directMessage.type === 'group'}
					/>
					<div className={'ml-3 flex w-[calc(100%-2.5rem)] grow flex-col justify-center leading-none'}>
						<p
							className={clsx(
								'w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium group-hover:w-[8.25rem] group-hover:text-[#dbdee1]',
								pathname === `http://localhost:5173/${chatId}` && 'text-[#dbdee1]',
							)}
						>
							{directMessage.name}
						</p>
						{directMessage.members ? (
							<p
								className={clsx(
									'w-full text-xs group-hover:text-[#dbdee1]',
									pathname === `http://localhost:5173/${chatId}` && 'text-[#dbdee1]',
								)}
							>
								{directMessage.members} Members
							</p>
						) : (
							''
						)}
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
