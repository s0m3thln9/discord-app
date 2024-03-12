import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import { Message, More } from '../../../../../../../public/svgs.tsx'
import Tooltip from '../../../../../UI/Tooltip/Tooltip.tsx'
import Button from '../../../../../UI/Button/Button.tsx'
import { UserShowableData } from '../../../../../../types/user.ts'

type Props = {
	friend: UserShowableData
}

const FriendItem = ({ friend }: Props) => {
	return (
		<li key={friend.id}>
			<div
				className={
					'group ml-5 mr-2.5 flex h-[3.875rem] items-center justify-between rounded-lg px-2.5 hover:bg-hover'
				}
			>
				<div className={'flex'}>
					<UserImage
						image={friend.userImage || ''}
						color={friend.color}
						onlineStatus={friend.onlineStatus}
						tooltip={false}
						bgColor={'content'}
						size={'md'}
					/>
					<div className={'ml-3 flex flex-col justify-between'}>
						<p className={'leading-4 text-white'}>
							{friend.displayName}{' '}
							<span className={'hidden text-[#b5bac1] group-hover:inline-block'}>{friend.username}</span>
						</p>
						<p className={'text-sm leading-4 text-[#b5bac1]'}>
							{friend.onlineStatus[0].toUpperCase()}
							{friend.onlineStatus.substring(1)}
						</p>
					</div>
				</div>
				<div className={'flex'}>
					<Tooltip text={'Message'} vertical={'top'} horizontal={'center'} y={'smm'}>
						<Button variant={'icon'}>
							<Message className={'h-5 w-5 fill-[#b5bac1] group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
					<Tooltip text={'More'} vertical={'top'} horizontal={'center'} y={'smm'} className={'ml-2'}>
						<Button variant={'icon'}>
							<More className={'h-5 w-5 fill-[#b5bac1] group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
				</div>
			</div>
		</li>
	)
}

export default FriendItem
