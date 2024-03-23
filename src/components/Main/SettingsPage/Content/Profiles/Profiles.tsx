import Headline from '../../../../UI/Headline/Headline.tsx'
import { ChangeEvent, useRef, useState } from 'react'
import Input from '../../../../UI/Input/Input.tsx'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/typedHooks.ts'
import UserImage from '../../../../UI/UserImage/UserImage.tsx'
import Timer from '../../../../UI/Timer/Timer.tsx'
import Button from '../../../../UI/Button/Button.tsx'
import { twMerge } from 'tailwind-merge'
import Modal from '../../../../UI/DiallogPopover/Modal.tsx'
import { useUpdateDisplayNameMutation, useUploadFileMutation } from '../../../../../api/api.ts'
import { updateDisplayNameD } from '../../../../../store/slices/authUserSlice.ts'
import { AddImage, Cross } from '../../../../../assets/svgs.tsx'
import editingProfile from '../../../../../assets/img/editingProfile.png'

const Profiles = () => {
	const user = useAppSelector(state => state.auth.user)

	const [displayName, setDisplayName] = useState(user?.displayName || '')
	const [pronouns, setPronouns] = useState('')
	const [notificationSeen, setNotificationSeen] = useState(false)
	const [changeAvatar, setChangeAvatar] = useState(false)
	const [updateDisplayName] = useUpdateDisplayNameMutation()
	const dispatch = useAppDispatch()
	const [uploadFile] = useUploadFileMutation()

	const inputRef = useRef<HTMLInputElement>(null)

	const handleButtonClick = () => {
		if (inputRef.current) {
			inputRef.current.click()
		}
	}

	const handleImageLoad = async (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		let file = e.target.files?.[0]
		if (!file) return
		const response = await uploadFile(file).unwrap()

		console.log('response', response)
	}

	if (!user) {
		return null
	}

	return (
		<div>
			<h2 className={'text-xl font-semibold text-[white]'}>Profiles</h2>
			<div className={'mt-8 flex justify-between'}>
				<div className={'w-[calc(50%-1rem)]'}>
					<Input
						label={'Display name'}
						type={'text'}
						id={'displayName'}
						placeholder={'Enter you display name'}
						value={displayName}
						onChange={e => {
							setNotificationSeen(true)
							setDisplayName(e.target.value)
						}}
						maxLength={32}
					/>
					<div className={'my-6 h-[1px] w-full bg-[#3b3d43] leading-5'}></div>
					<Input
						label={'Pronouns'}
						type={'text'}
						id={'displayName'}
						placeholder={'Add your pronouns'}
						value={pronouns}
						onChange={e => {
							setNotificationSeen(true)
							setPronouns(e.target.value)
						}}
					/>
					<div className={'my-6 h-[1px] w-full bg-[#3b3d43] leading-5'}></div>
				</div>
				<div className={'w-[calc(50%-1rem)]'}>
					<Headline>Preview</Headline>
					<div className={'mt-4 w-full rounded-lg bg-[#1e1f22] pb-4'}>
						<div className={'h-16 rounded-tl-lg rounded-tr-lg bg-[#130a1e]'}></div>
						<div className={'h-16'}>
							<div className={'relative ml-4 w-fit -translate-y-1/2'}>
								<UserImage
									image={user?.userImage || ''}
									color={user?.color}
									onlineStatus={user?.onlineStatus}
									bgColor={'profile-bg'}
									size={'lg'}
									border={'profile'}
									editable={setChangeAvatar}
								/>
							</div>
						</div>
						<div className={'mx-4 rounded-lg bg-[#111214] p-3'}>
							<h2 className={'w-full overflow-hidden text-xl font-semibold leading-5 text-white'}>
								{displayName || user.username}
							</h2>
							<h3 className={'text-sm text-white'}>{user.username}</h3>
							{pronouns && <p className={'mt-1 text-sm text-[#dbdee1]'}>{pronouns}</p>}
							<p className={'mt-3 text-sm text-[#dbdee1]'}>{user.textStatus}</p>
							<div className={'my-3 h-[1px] w-full bg-sidebar'}></div>
							<h2 className={'text-xs font-bold uppercase text-white'}>Customizing My Profile</h2>
							<div className={'mt-2 flex items-center'}>
								<div
									className={
										'flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-[#4044a4]'
									}
								>
									<img src={editingProfile} alt="editing profile" className={'h-12 w-12'} />
								</div>
								<div className={'ml-4 font-code'}>
									<p className={'text-sm leading-4 text-white'}>User Profile</p>
									<p className={'text-sm leading-4'}>
										<Timer />
										<span className={'ml-1.5'}>elapsed</span>
									</p>
								</div>
							</div>
							<Button
								className={'mt-3 h-8 w-full bg-[#50545c] text-white transition hover:bg-[#48444c]'}
								variant={'text'}
							>
								Example Button
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div
				className={twMerge(
					`absolute bottom-0 flex w-[41.25rem] translate-y-[100%] items-center justify-between rounded-[5px] bg-[rgb(17,18,20)] p-2.5 pl-4 transition`,
					notificationSeen ? 'translate-y-[-2rem]' : '',
				)}
			>
				<p className={'text-white'}>Careful — you have unsaved changes!</p>
				<div className={'flex items-center'}>
					<Button
						variant={'link'}
						onClick={() => {
							setNotificationSeen(false)
							setDisplayName(user.displayName)
							setPronouns('')
						}}
					>
						Reset
					</Button>
					<Button
						variant={'primary'}
						className={'w-fit bg-[#288444] hover:bg-[#206434]'}
						onClick={async () => {
							const response = await updateDisplayName({ displayName }).unwrap()
							if (response.success) {
								dispatch(updateDisplayNameD(displayName))
								setNotificationSeen(false)
								setPronouns('')
							} else {
								setNotificationSeen(false)
								setDisplayName(user.displayName)
								setPronouns('')
							}
						}}
					>
						Save Changes
					</Button>
				</div>
			</div>
			<Modal isOpen={changeAvatar} setIsOpen={setChangeAvatar}>
				<div className={'flex items-center justify-between'}>
					<h2 className={'text-md p-4 font-bold text-[white]'}>Select Image Avatar</h2>
					<Button
						variant={'icon'}
						className={'m-2 bg-[transparent] hover:bg-[transparent]'}
						onClick={() => setChangeAvatar(false)}
					>
						<Cross className="fill-white" />
					</Button>
				</div>
				<div className={'flex justify-center'}>
					<label htmlFor={'imageUploader'}>
						<input
							type="file"
							onChange={handleImageLoad}
							accept="image/*"
							alt={'avatar'}
							id={'imageUploader'}
							className={'hidden'}
							ref={inputRef}
						/>
						<Button
							variant={'text'}
							className={'m-4 flex flex-col items-center bg-[#232428] p-4 transition hover:bg-[#232428]'}
							onClick={handleButtonClick}
						>
							<div className={'flex h-32 w-32 items-center justify-center rounded-full bg-[#5865f2]'}>
								<AddImage className={'fill-[white]'} />
							</div>
							<p className={'mt-4'}>Upload Image</p>
						</Button>
					</label>
				</div>
			</Modal>
		</div>
	)
}

export default Profiles
