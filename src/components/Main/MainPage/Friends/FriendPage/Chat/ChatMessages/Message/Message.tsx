import UserImage from '../../../../../../../UI/UserImage/UserImage.tsx'
import { MessageType } from '../../../../../../../../types/messages.ts'
import formatDateForMessages from '../../../../../../../../utils/formatDateForMessages.ts'
import Tooltip from '../../../../../../../UI/Tooltip/Tooltip.tsx'
import formatDateForMessagesTooltip from '../../../../../../../../utils/formatDateForMessagesTooltip.ts'
import clsx from 'clsx'
import formattedDateForTime from '../../../../../../../../utils/formattedDateForTime.ts'
import { NoImageColors } from '../../../../../../../../types/user.ts'

type Props = {
	senderImage: string
	senderColor: NoImageColors
	senderDisplayName: string
	message: MessageType
	previous: MessageType | null
}

const Message = ({ message, previous, senderImage, senderColor, senderDisplayName }: Props) => {
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
					image={senderImage}
					onlineStatus={false}
					color={senderColor}
					bgColor={'content'}
					size={'md'}
				/>
			)}

			<div className={clsx('', previous?.senderId !== message.senderId ? 'ml-4' : 'grid grid-cols-[4rem,1fr]')}>
				{previous?.senderId === message.senderId && (
					<span
						className={
							'flex w-full cursor-default justify-center text-[0.6875rem] text-[#b5bac1] opacity-0 group-hover:opacity-100'
						}
					>
						{formattedDateForTime(date)}
					</span>
				)}
				{previous?.senderId !== message.senderId && (
					<span className={'flex select-text items-center text-sm leading-4 text-white'}>
						{senderDisplayName}
						<Tooltip
							text={formatDateForMessagesTooltip(date)}
							vertical={'top'}
							horizontal={'center'}
							y={'-xs'}
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

export default Message
