import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import Tooltip from '../../../../../UI/Tooltip/Tooltip.tsx'
import Button from '../../../../../UI/Button/Button.tsx'
import { UserShowableData } from '../../../../../../types/user.ts'
import { useAcceptFriendRequestMutation, useDeleteFriendRequestMutation } from '../../../../../../api/api.ts'
import { useDispatch } from 'react-redux'
import {
	deleteFriendRequestAC,
	updateFriendRequestNotifications,
} from '../../../../../../store/slices/friendRequestsSlice.ts'
import { Accept, Cross } from '../../../../../../assets/svgs.tsx'
import { addFriendToChannels } from '../../../../../../store/slices/chatsSlice.ts'

type Props = {
	user: UserShowableData
	type: 'incoming' | 'outgoing'
	requestId: number
}
const FriendRequest = ({ user, type, requestId }: Props) => {
	const [acceptFriendRequest] = useAcceptFriendRequestMutation()
	const [deleteFriendRequest] = useDeleteFriendRequestMutation()
	const dispatch = useDispatch()

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
						onlineStatus={false}
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
						<Tooltip text={'Cancel'} vertical={'top'} horizontal={'center'} y={'-sm'} className={'ml-2'}>
							<Button
								variant={'icon'}
								onClick={async () => {
									const response = await deleteFriendRequest({ requestId }).unwrap()
									dispatch(deleteFriendRequestAC({ requestId }))
									dispatch(updateFriendRequestNotifications({ id: user?.id || 0 }))
									console.log(response)
								}}
							>
								<Cross className={'h-5 w-5 fill-[#b5bac1] group-hover/iconBtn:fill-[#e43a41]'} />
							</Button>
						</Tooltip>
					) : (
						<>
							<Tooltip
								text={'Accept'}
								vertical={'top'}
								horizontal={'center'}
								y={'-sm'}
								className={'ml-2'}
							>
								<Button
									variant={'icon'}
									onClick={async () => {
										const response = await acceptFriendRequest({ requestId }).unwrap()
										if (response.success) {
											dispatch(deleteFriendRequestAC({ requestId }))
											dispatch(addFriendToChannels(user))
											dispatch(updateFriendRequestNotifications({ id: user?.id || 0 }))
										}
										console.log(response)
									}}
								>
									<Accept className={'h-5 w-5 fill-[#b5bac1] group-hover/iconBtn:fill-[#249e59]'} />
								</Button>
							</Tooltip>
							<Tooltip
								text={'Ignore'}
								vertical={'top'}
								horizontal={'center'}
								y={'-sm'}
								className={'ml-2'}
							>
								<Button
									variant={'icon'}
									onClick={async () => {
										const response = await deleteFriendRequest({ requestId }).unwrap()
										dispatch(deleteFriendRequestAC({ requestId }))
										dispatch(updateFriendRequestNotifications({ id: user?.id || 0 }))
										console.log(response)
									}}
								>
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
