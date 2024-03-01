import { Link } from 'react-router-dom'
import { Close, DSLogo } from '../../../../../public/svgs.tsx'
import { Channel } from '../../../../store/slices/chatsSlice.ts'
import StatusIndicator from '../../../UI/OnlineStatusIndicator/StatusIndicator.tsx'

type Props = {
	channel: Channel
}

const ChatChannel = ({ channel }: Props) => {
	return (
		<li key={`${channel.id}${channel.type}`} className={'pt-0.5'}>
			<Link
				to={'/'}
				className={
					'flex justify-between items-center text-[#949ba4] rounded px-2 h-[2.625rem] hover:no-underline hover:bg-[#35373c] group'
				}
			>
				<div className={'flex items-center w-[12.75rem]'}>
					<div className={'w-8 h-8 relative'}>
						{channel.image ? (
							<img src={channel.image} alt="userImage" className={'rounded-full h-8'} />
						) : (
							<div
								className={'w-8 h-8 rounded-full flex items-center justify-center shrink-0'}
								style={{ background: channel.color }}
							>
								<DSLogo width={20} height={20} />
							</div>
						)}

						{channel.type === 'user' ? (
							<StatusIndicator onlineStatus={channel.onlineStatus} tooltip={true} color={'#2b2c31'} />
						) : (
							''
						)}
					</div>
					<div className={'ml-3 flex flex-col justify-center leading-none grow w-full'}>
						<p
							className={
								'group-hover:text-[#dbdee1] font-medium overflow-hidden text-ellipsis whitespace-nowrap w-full group-hover:w-[8.25rem]'
							}
						>
							{channel.name}
						</p>
						{channel.members ? <p className={'text-xs'}>{channel.members} Members</p> : ''}
					</div>
				</div>
				<div className={'group p-1 hidden group-hover:flex'}>
					<Close className={'group-hover:fill-[#dbdee1] w-3 h-3'} />
				</div>
			</Link>
		</li>
	)
}

export default ChatChannel
