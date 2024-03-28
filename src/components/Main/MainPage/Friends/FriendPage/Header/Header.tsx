import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import ToolBar from '../../ToolBar/ToolBar.tsx'
import { HeaderProps } from '../FriendPage.tsx'

type Props = {
	header: HeaderProps
}

const Header = ({ header }: Props) => {
	return (
		<section className={'flex h-12 items-center justify-between border-b-[1px] border-[#202225] p-2.5 pt-2.5'}>
			<div className={'flex items-center'}>
				<div className={'flex items-center'}>
					<UserImage
						image={header.image}
						color={header.color}
						bgColor={'content'}
						onlineStatus={header.onlineStatus}
						size={'sm'}
						isGroup={!header.onlineStatus}
					/>
					<p className={'ml-2 font-bold text-white'}>{header.displayName}</p>
				</div>
			</div>
			<ToolBar usage={'friend'} />
		</section>
	)
}

export default Header
