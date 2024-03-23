import Button from '../../../UI/Button/Button.tsx'
import Modal from '../../../UI/DiallogPopover/Modal.tsx'
import { useAuth } from '../../../../providers/authProvider/AuthProvider.tsx'

type Props = {
	isLogoutPopoverOpen: boolean
	setIsLogoutPopoverOpen: (isOpen: boolean) => void
}

const LogoutModal = ({ isLogoutPopoverOpen, setIsLogoutPopoverOpen }: Props) => {
	const { logout } = useAuth()

	const handleClose = () => {
		setIsLogoutPopoverOpen(false)
	}

	return (
		<Modal isOpen={isLogoutPopoverOpen} handleClose={handleClose}>
			<div
				className={`flex min-h-[12.5rem] min-w-[28rem] flex-col justify-between rounded bg-content transition duration-300 ${isLogoutPopoverOpen ? 'scale-100' : 'scale-75'}`}
			>
				<div>
					<h2 className={'text-md p-4 text-[white]'}>Log Out</h2>
					<p className={'px-4 pb-4'}>Are you sure you want to Log Out?</p>
				</div>
				<div className={'mt-4 flex justify-end bg-sidebar p-4'}>
					<Button variant={'link'} className={'px-6 py-2'} onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant={'danger'}
						className={'px-6 py-2 text-[white] transition hover:bg-[#a12828] hover:text-[white]'}
						onClick={logout}
					>
						Log Out
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default LogoutModal
