import Button from '../../../UI/Button/Button.tsx'
import { useState } from 'react'
import { useSendFriendRequestMutation } from '../../../../api/api.ts'
import { SendFriendRequestResponse } from '../../../../types/friends.ts'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const AddingFriends = () => {
	const [username, setUsername] = useState('')
	const [sendFriendRequest] = useSendFriendRequestMutation()
	const [serverResponse, setServerResponse] = useState<SendFriendRequestResponse | null>(null)
	return (
		<div className={'h-fit grow border-b-[1px] border-b-[#3f4147] px-[1.875rem] py-5'}>
			<h2 className={'uppercase text-white'}>Add friends</h2>
			<p className={'mt-2 text-sm'}>You can add friends with their Discord username.</p>
			<div
				className={twMerge(
					clsx(
						`mt-4 flex h-12 items-center rounded-lg border-[1px] bg-[#1e1f22] px-3 focus-within:border-[#00a7fb]`,
						serverResponse?.success
							? 'border-[#23a55a] focus-within:border-[#23a55a]'
							: 'border-[#e93b42] focus-within:border-[#e93b42]',
						serverResponse === null && 'border-[transparent] focus-within:border-[#00a7fb]',
					),
				)}
			>
				<div className={'mr-3 grow'}>
					<input
						type="text"
						placeholder={'You can add friends with their Discord username.'}
						className={'w-full bg-[transparent] text-white'}
						value={username}
						onChange={e => {
							setUsername(e.target.value)
							setServerResponse(null)
						}}
					/>
				</div>
				<Button
					variant={'primary'}
					className={'h-8 w-fit'}
					disabled={username === ''}
					onClick={async () => {
						const response = await sendFriendRequest({ username }).unwrap()
						setServerResponse(response)
						console.log(response)
					}}
				>
					Send Friend Request
				</Button>
			</div>
			{serverResponse && (
				<p className={twMerge(clsx('mt-2'), serverResponse.success ? 'text-[#2dc770]' : 'text-[#e93b42]')}>
					{serverResponse.message}
				</p>
			)}
		</div>
	)
}

export default AddingFriends
