import UserImage from '../../../../../UI/UserImage/UserImage.tsx'
import Tooltip from '../../../../../UI/Tooltip/Tooltip.tsx'
import { Crown } from '../../../../../../assets/svgs.tsx'
import clsx from 'clsx'
import { UserShowableData } from '../../../../../../types/user.ts'

type Props = {
	participants: UserShowableData[]
	ownerId: number
}

const MemberList = ({ participants, ownerId }: Props) => {
	return (
		<div className={'w-[15rem] bg-sidebar'}>
			<h4 className={'pl-4 pr-2 pt-6 text-xs font-semibold uppercase text-[#949ba4]'}>
				members—{participants.length}
			</h4>
			<ul>
				{participants.map(participant => (
					<li
						key={participant.id}
						className={clsx(
							'group mx-2 flex h-11 cursor-pointer items-center rounded px-2 hover:bg-hover hover:opacity-100',
							participant.onlineStatus === 'offline' && 'opacity-50',
						)}
					>
						<UserImage
							image={participant.userImage}
							color={participant.color}
							onlineStatus={participant.onlineStatus !== 'offline' ? participant.onlineStatus : false}
							bgColor={'sidebar'}
							tooltip={true}
							size={'md'}
						/>
						<div className={'ml-3 text-[#949ba4]'}>
							<div className={'flex items-center'}>
								<p className={'text-base leading-5 group-hover:text-white'}>
									{participant.displayName}
								</p>
								{ownerId === participant.id && (
									<Tooltip text={'Group Owner'} className={'ml-1'}>
										<Crown fill={'#f0b132'} className={'h-[0.875rem] w-[0.875rem]'} />
									</Tooltip>
								)}
							</div>
							<p className={'text-xs leading-4'}>{participant.textStatus}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MemberList
