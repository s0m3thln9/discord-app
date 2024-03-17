import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import ToolBar from '../../ToolBar/ToolBar.tsx'
import { UserWithoutPassword } from '../../../../../../types/user.ts'

type Props = {
	friend: UserWithoutPassword
}

const Header = ({ friend }: Props) => {
	return (
		<section className={'flex h-12 items-center justify-between border-b-[1px] border-[#202225] p-2.5 pt-2.5'}>
			<div className={'flex items-center'}>
				<div className={'flex items-center'}>
					<UserImage
						image={friend.userImage || ''}
						color={friend.color}
						bgColor={'content'}
						onlineStatus={friend.onlineStatus}
						size={'sm'}
					/>
					<p className={'ml-2 font-bold text-white'}>{friend.displayName}</p>
				</div>
			</div>
			<ToolBar usage={'friend'} />
		</section>
	)
}

export default Header
