import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import ToolBar from '../../ToolBar/ToolBar.tsx'
import { HeaderProps } from '../FriendPage.tsx'

type Props = {
	header: HeaderProps
	toggleMembersShow: () => void
	isShowMembers: boolean
}

const Header = ({ header, toggleMembersShow, isShowMembers }: Props) => {
	return (
		<section className={'flex h-12 items-center justify-between border-b-[1px] border-[#202225] p-2.5 pl-4 pt-2.5'}>
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
					<div className={'shrink'}>
						<p className={'ml-3 text-nowrap font-semibold text-white'}>{header.displayName}</p>
					</div>
				</div>
			</div>
			<ToolBar usage={'friend'} toggleMembersShow={toggleMembersShow} isShowMembers={isShowMembers} />
		</section>
	)
}

export default Header
