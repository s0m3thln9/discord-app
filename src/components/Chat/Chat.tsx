import ChatMessages from './ChatMessages/ChatMessages.tsx'
import ChatInput from './ChatInput/ChatInput.tsx'
import { ChatPrisma } from '../../types/chat.ts'
import { HeaderProps } from '../Main/MainPage/Friends/FriendPage/FriendPage.tsx'
import { useSocket } from '../../providers/socketProvider/SocketProvider.tsx'
import { UserWithoutPassword } from '../../types/user.ts'

type Props = {
	type: 'friend' | 'group'
	chat: ChatPrisma
	header: HeaderProps
	user: UserWithoutPassword
}

const Chat = ({ type, chat, header, user }: Props) => {
	const { handleSend } = useSocket()

	const sendMessage = (newMessageText: string) => {
		console.log('send')
		handleSend(newMessageText, chat)
	}

	return (
		<section className={'flex grow flex-col'}>
			<ChatMessages header={header} type={type} chat={chat} user={user} />
			<ChatInput handleSend={sendMessage} displayName={header.displayName} />
		</section>
	)
}

export default Chat
