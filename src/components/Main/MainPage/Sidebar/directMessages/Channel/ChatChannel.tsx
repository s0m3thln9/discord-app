import { Link } from 'react-router-dom'
import { Close } from '../../../../../../../public/svgs.tsx'
import { Channel } from '../../../../../../store/slices/chatsSlice.ts'
import UserImage from '../../../../../UI/UserImage/UserImage.tsx'

type Props = {
	channel: Channel
}

const ChatChannel = ({ channel }: Props) => {
	return (
		<li key={`${channel.id}${channel.type}`} className={'pt-0.5'}>
			<Link
				to={'/'}
				className={
					'group flex h-[2.625rem] items-center justify-between rounded px-2 text-[#949ba4] hover:bg-[#35373c] hover:no-underline'
				}
			>
				<div className={'flex w-[12.75rem] items-center'}>
					<UserImage
						image={channel.image || ''}
						color={channel.color}
						onlineStatus={channel.onlineStatus}
						tooltip={true}
						bgColor={'sidebar'}
						size={'md'}
					/>
					<div className={'ml-3 flex w-full grow flex-col justify-center leading-none'}>
						<p
							className={
								'w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium group-hover:w-[8.25rem] group-hover:text-[#dbdee1]'
							}
						>
							{channel.name}
						</p>
						{channel.members ? <p className={'text-xs'}>{channel.members} Members</p> : ''}
					</div>
				</div>
				<div className={'group hidden p-1 group-hover:flex'}>
					<Close className={'h-3 w-3 group-hover:fill-[#dbdee1]'} />
				</div>
			</Link>
		</li>
	)
}

export default ChatChannel
