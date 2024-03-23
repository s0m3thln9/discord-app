import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import ToolBar from '../../ToolBar/ToolBar.tsx'
import { NoImageColors } from '../../../../../../types/user.ts'

type Props = {
	image: string
	color: NoImageColors
	onlineStatus: 'offline' | 'online' | 'idle' | 'doNotDisturb' | false
	displayName: string
}

const Header = ({ image, color, onlineStatus, displayName }: Props) => {
	return (
		<section className={'flex h-12 items-center justify-between border-b-[1px] border-[#202225] p-2.5 pt-2.5'}>
			<div className={'flex items-center'}>
				<div className={'flex items-center'}>
					<UserImage
						image={image}
						color={color}
						bgColor={'content'}
						onlineStatus={onlineStatus}
						size={'sm'}
						isGroup={!onlineStatus}
					/>
					<p className={'ml-2 font-bold text-white'}>{displayName}</p>
				</div>
			</div>
			<ToolBar usage={'friend'} />
		</section>
	)
}

export default Header
