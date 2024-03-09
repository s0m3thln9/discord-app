import Button from '../../../UI/Button/Button.tsx'
import { useState } from 'react'
import { useSendFriendRequestMutation } from '../../../../api/api.ts'

const AddingFriends = () => {
	const [username, setUsername] = useState('')
	const [sendFriendRequest] = useSendFriendRequestMutation()
	return (
		<div className={'h-fit grow border-b-[1px] border-b-[#3f4147] px-[1.875rem] py-5'}>
			<h2 className={'uppercase text-white'}>Add friends</h2>
			<p className={'mt-2 text-sm'}>You can add friends with their Discord username.</p>
			<div
				className={
					'mt-4 flex h-12 items-center rounded-lg bg-[#1e1f22] px-3 focus-within:border-[1px] focus-within:border-[#00a7fb] focus-within:p-[11px]'
				}
			>
				<div className={'mr-3 grow'}>
					<input
						type="text"
						placeholder={'You can add friends with their Discord username.'}
						className={'w-full bg-[transparent] text-white'}
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</div>
				<Button
					variant={'primary'}
					className={'h-8 w-fit'}
					disabled={username === ''}
					onClick={async () => {
						const response = await sendFriendRequest({ username }).unwrap()
						console.log(response)
					}}
				>
					Send Friend Request
				</Button>
			</div>
		</div>
	)
}

export default AddingFriends
