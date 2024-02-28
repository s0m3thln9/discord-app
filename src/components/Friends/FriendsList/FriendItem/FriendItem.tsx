import UserImage from '../../../UI/UserImage/UserImage.tsx'
import IconButton from '../../../UI/Button/IconButton.tsx'
import { Message, More } from '../../../../../public/svgs.tsx'
import { PublicUser } from '../../../../types/AuthProvider.ts'

type Props = {
	friend: PublicUser
}

const FriendItem = ({ friend }: Props) => {
	return (
		<li key={friend.id}>
			<div
				className={
					'ml-5 mr-5 hover:bg-hover flex items-center justify-between group h-[3.875rem] rounded-lg px-2.5'
				}
			>
				<div className={'flex'}>
					<UserImage image={friend.userImage || ''} color={friend.color} onlineStatus={friend.onlineStatus} />
					<div className={'flex flex-col justify-between ml-3'}>
						<p className={'leading-4 text-[#f2f3f5]'}>
							{friend.displayName}{' '}
							<span className={'hidden group-hover:inline-block text-[#b5bac1]'}>{friend.username}</span>
						</p>
						<p className={'text-sm leading-4 text-[#b5bac1]'}>
							{friend.onlineStatus[0].toUpperCase()}
							{friend.onlineStatus.substring(1)}
						</p>
					</div>
				</div>
				<div className={'flex'}>
					<IconButton variant={'dark'}>
						<Message className={'group-hover/iconBtn:fill-[#dbdee1] fill-[#b5bac1] w-5 h-5'} />
					</IconButton>
					<IconButton variant={'dark'} className={'ml-2'}>
						<More className={'group-hover/iconBtn:fill-[#dbdee1] fill-[#b5bac1] w-5 h-5'} />
					</IconButton>
				</div>
			</div>
		</li>
	)
}

export default FriendItem
