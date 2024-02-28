import Tooltip from '../../UI/Tooltip/Tooltip.tsx'
import { Help, Inbox, NewDMGroup } from '../../../../public/svgs.tsx'
import IconButton from '../../UI/Button/IconButton.tsx'

const ToolBar = () => {
	return (
		<div className={'flex items-center'}>
			<IconButton className={'relative group/tooltip mx-2'}>
				<NewDMGroup fill={'#b5bac1'} className={'group-hover/tooltip:fill-[#dbdee1]'} />
				<Tooltip text={'New Group DM'} position={{ vertical: 'bottom', horizontal: 'center' }} />
			</IconButton>
			<IconButton
				className={'flex relative group/tooltip mx-2 before:w-[1px] before:mr-4 before:bg-[#3f4147] before:h-6'}
			>
				<Inbox fill={'#b5bac1'} className={'group-hover/tooltip:fill-[#dbdee1]'} />
				<Tooltip text={'Inbox'} position={{ vertical: 'bottom', horizontal: 'center' }} />
			</IconButton>
			<IconButton className={'relative group/tooltip mx-2'}>
				<Help fill={'#b5bac1'} className={'group-hover/tooltip:fill-[#dbdee1]'} />
				<Tooltip text={'Help'} position={{ vertical: 'bottom', horizontal: 'center' }} />
			</IconButton>
		</div>
	)
}

export default ToolBar
