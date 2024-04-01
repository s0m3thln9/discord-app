import { UserShowableData } from '../../../../../../types/user.ts'
import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import { useState } from 'react'

type Props = {
	friend: UserShowableData | undefined
}

const UserProfile = ({ friend }: Props) => {
	const [note, setNote] = useState('')
	if (!friend) return null

	const regDate = new Date(friend.createdAt).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})

	return (
		<div className={'w-[21.25rem] bg-user-info'}>
			<div className={'h-[7.5rem] bg-[#1e1f22]'}>
				<UserImage
					image={friend.userImage}
					color={friend.color}
					bgColor={'userInfo'}
					onlineStatus={friend.onlineStatus}
					size={'lg'}
					tooltip={true}
					className={'ml-4 translate-y-[4rem]'}
				/>
			</div>
			<div className={'m-4 mt-[3.375rem] rounded-lg bg-[#111214] p-3'}>
				<div>
					<p className={'text-xl font-semibold leading-6 text-white'}>{friend.displayName}</p>
					<p className={'text-sm font-medium leading-[1.125rem] text-white'}>{friend.username}</p>
				</div>
				<div className={'my-3 h-[1px] bg-[#2e2f34]'}></div>
				<div>
					<h4 className={'text-xs font-bold uppercase text-white'}>Discord member since</h4>
					<p className={'mt-1.5 text-sm leading-[1.125rem] text-[#dbdee1]'}>{regDate}</p>
				</div>
				<div className={'my-3 h-[1px] bg-[#2e2f34]'}></div>
				<div>
					<h4 className={'text-xs font-bold uppercase text-white'}>NOTE</h4>
					<textarea
						value={note}
						onChange={e => setNote(e.target.value)}
						className={
							'invisible-placeholder mt-1.5 w-full resize-none bg-[transparent] p-1 text-xs text-white outline-none placeholder:text-[#dbdee1]'
						}
						placeholder={'Click to add note'}
					/>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
