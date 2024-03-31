import { Link } from 'react-router-dom'
import Tooltip from '../../../UI/Tooltip/Tooltip.tsx'
import { Compass, DSLogo, Plus } from '../../../../assets/svgs.tsx'
import { clsx } from 'clsx'
import { useAppSelector } from '../../../../hooks/typedHooks.ts'

const Navigation = () => {
	const pathname = window.location.href
	const notifications = useAppSelector(state => state.friendRequests.notifications)
	return (
		<nav className={'min-h-svh w-[4.5rem] shrink-0 bg-[#1e1f22]'}>
			<ul className={'flex flex-col items-center justify-center pt-3'}>
				<li
					className={clsx(
						'navbar-item group/tooltip group mt-0 hover:bg-[#5865f2]',
						pathname === 'http://localhost:5173/' &&
							'rounded-2xl bg-[#5865f2] before:h-6 before:translate-x-0 before:bg-white',
					)}
				>
					<Tooltip
						text={'Direct Messages'}
						className={'h-full w-full justify-center'}
						placement={'right'}
						x={'lg'}
						width={'full'}
						height={'full'}
					>
						<Link to={'/'} className={'relative flex h-full w-full items-center justify-center'}>
							<DSLogo height={24} width={24} />
							{notifications > 0 && (
								<span
									className={
										'border-navigation absolute bottom-[-0.25rem] right-[-0.25rem] flex h-6 w-6 items-center justify-center rounded-full border-[0.25rem] bg-[#f23f43] text-[0.75rem] font-bold text-white'
									}
								>
									{notifications}
								</span>
							)}
						</Link>
					</Tooltip>
				</li>
				<li className={'separator mt-2 h-0.5 w-8 rounded-full bg-[#2d2f32]'}></li>
				<li className={'action-btn navbar-item group/tooltip group'}>
					<Tooltip
						text={'Add a Server'}
						className={'h-full w-full justify-center'}
						x={'lg'}
						placement={'right'}
						width={'full'}
						height={'full'}
					>
						<Link to={'/'} className={'flex h-full w-full items-center justify-center'}>
							<Plus
								height={16}
								width={16}
								className={
									'fill-[#3BA55D] transition-colors duration-200 ease-in-out group-hover:fill-[#fff]'
								}
							/>
						</Link>
					</Tooltip>
				</li>
				<li className={'action-btn navbar-item group/tooltip group'}>
					<Tooltip
						text={'Explore Discoverable Servers'}
						className={'h-full w-full justify-center'}
						x={'lg'}
						placement={'right'}
						width={'full'}
						height={'full'}
					>
						<Link to={'/'} className={'flex h-full w-full items-center justify-center'}>
							<Compass
								width={24}
								height={24}
								className={
									'fill-[#3BA55D] transition-colors duration-200 ease-in-out group-hover:fill-[#fff]'
								}
							/>
						</Link>
					</Tooltip>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
