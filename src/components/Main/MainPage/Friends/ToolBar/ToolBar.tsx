import Tooltip from '../../../../UI/Tooltip/Tooltip.tsx'
import Button from '../../../../UI/Button/Button.tsx'
import { Camera, Help, Inbox, NewDMGroup, Pin, RingingPhone } from '../../../../../assets/svgs.tsx'

type Props = {
	usage: 'main' | 'friend'
}

const ToolBar = ({ usage }: Props) => {
	return (
		<div className={'flex items-center'}>
			{usage === 'main' ? (
				<Tooltip text={'New Group DM'} vertical={'bottom'} horizontal={'center'} y={'xs'} className={'mr-4'}>
					<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
						<NewDMGroup fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
					</Button>
				</Tooltip>
			) : (
				<>
					<Tooltip text={'Start voice call'} vertical={'bottom'} horizontal={'center'} y={'xs'}>
						<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
							<RingingPhone fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
					<Tooltip text={'Start voice call'} vertical={'bottom'} horizontal={'center'} y={'xs'}>
						<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
							<Camera fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
					<Tooltip text={'Start voice call'} vertical={'bottom'} horizontal={'center'} y={'xs'}>
						<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
							<Pin fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
						</Button>
					</Tooltip>
				</>
			)}

			<Tooltip
				text={'Inbox'}
				vertical={'bottom'}
				horizontal={'center'}
				y={'xs'}
				className={
					'ml-4 flex before:absolute before:-left-[1rem] before:top-1/2 before:h-6 before:w-[1px] before:translate-y-[-50%] before:bg-[#3f4147]'
				}
			>
				<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
					<Inbox fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
				</Button>
			</Tooltip>
			<Tooltip text={'Help'} vertical={'bottom'} horizontal={'center'} y={'xs'} className={'ml-4 mr-2'}>
				<Button variant={'icon'} className={'bg-transparent hover:bg-transparent'}>
					<Help fill={'#b5bac1'} className={'group-hover/iconBtn:fill-[#dbdee1]'} />
				</Button>
			</Tooltip>
		</div>
	)
}

export default ToolBar
