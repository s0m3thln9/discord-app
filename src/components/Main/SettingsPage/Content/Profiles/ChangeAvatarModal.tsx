import Button from '../../../../UI/Button/Button.tsx'
import { AddImage, Cross } from '../../../../../assets/svgs.tsx'
import Modal from '../../../../UI/DiallogPopover/Modal.tsx'
import { ChangeEvent, useRef } from 'react'
import { useUploadFileMutation } from '../../../../../api/api.ts'

type Props = {
	changeAvatar: boolean
	setChangeAvatar: (avatar: boolean) => void
}

const ChangeAvatarModal = ({ changeAvatar, setChangeAvatar }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [uploadFile] = useUploadFileMutation()
	const handleClose = () => {
		setChangeAvatar(false)
	}

	const handleImageLoad = async (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		let file = e.target.files?.[0]
		if (!file) return
		const response = await uploadFile(file).unwrap()

		console.log('response', response)
	}

	const handleUpload = () => {
		if (inputRef.current) {
			inputRef.current.click()
		}
	}

	return (
		<Modal isOpen={changeAvatar} handleClose={handleClose}>
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
						onClick={handleUpload}
					>
						<div className={'flex h-32 w-32 items-center justify-center rounded-full bg-[#5865f2]'}>
							<AddImage className={'fill-[white]'} />
						</div>
						<p className={'mt-4'}>Upload Image</p>
					</Button>
				</label>
			</div>
		</Modal>
	)
}

export default ChangeAvatarModal
