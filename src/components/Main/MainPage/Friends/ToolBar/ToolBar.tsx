import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'
import Button from '../../../../UI/Button/Button.tsx'
import { Camera, Help, Inbox, MemberListIcon, NewDMGroup, Pin, RingingPhone } from '../../../../../assets/svgs.tsx'

type Props = {
	usage: 'main' | 'friend'
	toggleMembersShow: () => void
	isShowMembers: boolean
}

const ToolBar = ({ usage, toggleMembersShow, isShowMembers }: Props) => {
	return (
		<div
			className={
				'relative flex items-center before:absolute before:-left-2 before:top-0 before:h-10 before:w-2 before:bg-[linear-gradient(90deg,rgba(49,51,56,0),rgba(49,51,56,1))]'
			}
		>
			{usage === 'main' ? (
				<>
					<Tooltip text={'New Group DM'} placement={'bottom'} y={'0'}>
						<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
							<NewDMGroup fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
					<div className={'bg- mx-2 h-6 w-[1px] bg-[#3f4147]'}></div>
				</>
			) : (
				<>
					<Tooltip text={'Start voice call'} placement={'bottom'} y={'0'}>
						<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
							<RingingPhone fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
					<Tooltip text={'Start voice call'} placement={'bottom'} y={'0'}>
						<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
							<Camera fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
					<Tooltip text={'Start voice call'} placement={'bottom'} y={'0'}>
						<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
							<Pin fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
					<Tooltip
						text={isShowMembers ? 'Hide Member List' : 'Show Member List'}
						placement={'bottom'}
						y={'0'}
						shouldTooltipClose={false}
					>
						<Button
							variant={'icon'}
							className={'bg-transparent hover:bg-transparent'}
							onClick={toggleMembersShow}
						>
							<MemberListIcon
								fill={isShowMembers ? 'white' : '#b5bac1'}
								className={'group-hover/iconBtn:fill-[#dbdee1]'}
							/>
						</Button>
					</Tooltip>
				</>
			)}

			<Tooltip text={'Inbox'} placement={'bottom'} y={'0'} className={'flex'}>
				<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
					<Inbox fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
				</Button>
			</Tooltip>
			<Tooltip text={'Help'} placement={'bottom'} y={'0'}>
				<Button variant={'icon'} className={'bg-transparent hover:bg-transparent h-10 w-10'}>
					<Help fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
				</Button>
			</Tooltip>
		</div>
	)
}

export default ToolBar
