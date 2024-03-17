import UserImage from '../../../../../../../UI/UserImage/UserImage.tsx'
import { useAppSelector } from '../../../../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'
import { Message } from '../../../../../../../../types/messages.ts'
import formatDateForMessages from '../../../../../../../../utils/formatDateForMessages.ts'
import Tooltip from '../../../../../../../UI/Tooltip/Tooltip.tsx'
import formatDateForMessagesTooltip from '../../../../../../../../utils/formatDateForMessagesTooltip.ts'
import clsx from 'clsx'
import formattedDateForTime from '../../../../../../../../utils/formattedDateForTime.ts'

type Props = {
	message: Message
	previous: Message | null
}

const MessageCom = ({ message, previous }: Props) => {
	const user = useAppSelector(state => state.auth.user)
	const { id } = useParams()
	const users = useAppSelector(state => state.friends.friends)
	const friend = users.find(f => f.id === +(id || '0'))
	if (!user) return null
	if (!friend) return null

	const date = new Date(message.createdAt)

	return (
		<div
			className={clsx(
				'group flex select-text items-center py-1 hover:bg-[#2e3035]',
				previous?.senderId !== message.senderId && 'mt-4 pl-4',
			)}
		>
			{previous?.senderId !== message.senderId && (
				<UserImage
					image={(user.id === message.senderId ? user.userImage : friend.userImage) || ''}
					onlineStatus={'group'}
					color={'orange'}
					bgColor={'content'}
					size={'md'}
				/>
			)}

			<div className={clsx('', previous?.senderId !== message.senderId ? 'ml-4' : 'grid grid-cols-[4rem,1fr]')}>
				{previous?.senderId === message.senderId && (
					/*<Tooltip text={formatDateForMessagesTooltip(date)} vertical={'top'} horizontal={'center'} y={'xsm'}>*/
					<span
						className={
							'flex w-full cursor-default justify-center text-[0.6875rem] text-[#b5bac1] opacity-0 group-hover:opacity-100'
						}
					>
						{formattedDateForTime(date)}
					</span>
					/*</Tooltip>*/
				)}
				{previous?.senderId !== message.senderId && (
					<span className={'flex select-text items-center text-sm leading-4 text-white'}>
						{friend.id === message.senderId ? friend.displayName : user.displayName}
						<Tooltip
							text={formatDateForMessagesTooltip(date)}
							vertical={'top'}
							horizontal={'center'}
							y={'xsm'}
						>
							<span className={'ml-4 cursor-default select-text text-xs text-[#b5bac1]'}>
								{formatDateForMessages(date)}
							</span>
						</Tooltip>
					</span>
				)}
				<p className={'select-text text-sm leading-4 text-white'}>{message.text}</p>
			</div>
		</div>
	)
}

export default MessageCom
