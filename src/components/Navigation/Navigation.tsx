import { Link } from 'react-router-dom'
import { Compass, DSLogo, Plus } from '../../../public/svgs.tsx'
import Tooltip from '../UI/Tooltip/Tooltip.tsx'

const Navigation = () => {
	return (
		<nav className={'w-[4.5rem] bg-[#1e1f22] min-h-svh'}>
			<ul className={'flex justify-center flex-col items-center pt-3'}>
				<li className={'group/tooltip navbar-item mt-0 hover:bg-[#5865f2] group'}>
					<Link to={'/'} className={'flex items-center'}>
						<DSLogo height={24} width={24} />
					</Link>
					<Tooltip
						text={'Direct Messages'}
						position={{ vertical: 'center', horizontal: 'right' }}
						space={{ vertical: '0', horizontal: '1rem' }}
					/>
				</li>
				<li className={'separator mt-2 h-1 w-8 rounded-full bg-[#2d2f32]'}></li>
				<li className={'action-btn group/tooltip navbar-item group'}>
					<Link to={'/'}>
						<Plus
							width={16}
							height={16}
							className={
								'transition-colors ease-in-out duration-200 fill-[#3BA55D] group-hover:fill-white'
							}
						/>
					</Link>
					<Tooltip
						text={'Add a Server'}
						position={{ vertical: 'center', horizontal: 'right' }}
						space={{ vertical: '0', horizontal: '0' }}
					/>
				</li>
				<li className={'action-btn group/tooltip navbar-item group'}>
					<Link to={'/'}>
						<Compass
							width={20}
							height={20}
							className={
								'transition-colors ease-in-out duration-200 fill-[#3BA55D] group-hover:fill-white'
							}
						/>
					</Link>
					<Tooltip
						text={'Explore Discoverable Servers'}
						position={{ vertical: 'center', horizontal: 'right' }}
						space={{ vertical: '0', horizontal: '0' }}
					/>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
