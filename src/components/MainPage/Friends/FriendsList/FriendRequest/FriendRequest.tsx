import UserImage from '../../../../UI/UserImage/UserImage.tsx'
import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'
import Button from '../../../../UI/Button/Button.tsx'
import { UserShowableData } from '../../../../../types/user.ts'
import { Accept, Cross } from '../../../../../../public/svgs.tsx'
import { useAcceptFriendRequestMutation } from '../../../../../api/api.ts'

type Props = {
	user: Omit<UserShowableData, 'onlineStatus'> & {
		onlineStatus: false
	}
	type: 'incoming' | 'outgoing'
	requestId: number
}

const FriendRequest = ({ user, type, requestId }: Props) => {
	const [acceptFriend] = useAcceptFriendRequestMutation()

	return (
		<li key={user.id}>
			<div
				className={
					'group ml-5 mr-2.5 flex h-[3.875rem] items-center justify-between rounded-lg px-2.5 hover:bg-hover'
				}
			>
				<div className={'flex'}>
					<UserImage
						image={user.userImage || ''}
						color={user.color}
						onlineStatus={'group'}
						tooltip={false}
						bgColor={'content'}
						size={'md'}
					/>
					<div className={'ml-3 flex flex-col justify-between'}>
						<p className={'leading-4 text-white'}>
							{user.displayName}{' '}
							<span className={'hidden text-[#b5bac1] group-hover:inline-block'}>{user.username}</span>
						</p>
						<p className={'text-sm leading-4 text-[#b5bac1]'}>
							{type === 'outgoing' ? 'Outgoing' : 'Incoming'} Friend Request
						</p>
					</div>
				</div>
				<div className={'flex'}>
					{type === 'outgoing' ? (
						<Tooltip text={'Cancel'} vertical={'top'} horizontal={'center'} y={'smm'} className={'ml-2'}>
							<Button variant={'icon'}>
								<Cross className={'h-5 w-5 fill-[#b5bac1] group-hover/iconBtn:fill-[#e43a41]'} />
							</Button>
						</Tooltip>
					) : (
						<>
							<Tooltip
								text={'Accept'}
								vertical={'top'}
								horizontal={'center'}
								y={'smm'}
								className={'ml-2'}
								onClick={async () => {
									const response = await acceptFriend({ requestId }).unwrap()
									console.log(response)
								}}
							>
								<Button variant={'icon'}>
									<Accept className={'h-5 w-5 fill-[#b5bac1] group-hover/iconBtn:fill-[#249e59]'} />
								</Button>
							</Tooltip>
							<Tooltip
								text={'Ignore'}
								vertical={'top'}
								horizontal={'center'}
								y={'smm'}
								className={'ml-2'}
							>
								<Button variant={'icon'}>
									<Cross className={'h-5 w-5 fill-[#b5bac1] group-hover/iconBtn:fill-[#e43a41]'} />
								</Button>
							</Tooltip>
						</>
					)}
				</div>
			</div>
		</li>
	)
}

export default FriendRequest