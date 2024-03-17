import UserImage from '../../../../../../../UI/UserImage/UserImage.tsx'
import { useAppSelector } from '../../../../../../../../hooks/typedHooks.ts'
import { useParams } from 'react-router-dom'
import { Message } from '../../../../../../../../types/messages.ts'

type Props = {
	message: Message
}

const MessageCom = ({ message }: Props) => {
	const user = useAppSelector(state => state.auth.user)
	const { id } = useParams()
	const users = useAppSelector(state => state.friends.friends)
	const friend = users.find(f => f.id === +(id || '0'))
	if (!user) return null
	if (!friend) return null
	return (
		<div className={'m-2 flex items-center bg-hover p-2'}>
			<UserImage
				image={(user.id === message.senderId ? user.userImage : friend.userImage) || ''}
				onlineStatus={'group'}
				color={'orange'}
				bgColor={'content'}
				size={'md'}
			/>
			<div className={'ml-2'}>
				<p className={'select-text leading-4 text-white'}>{'revus05'}</p>
				<p className={'select-text leading-4 text-white'}>{message.text}</p>
			</div>
		</div>
	)
}

export default MessageCom
