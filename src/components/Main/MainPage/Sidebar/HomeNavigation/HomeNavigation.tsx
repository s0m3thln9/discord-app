import { Link } from 'react-router-dom'
import { DSNitro, Friends, Shop } from '../../../../../assets/svgs.tsx'
import { useAppSelector } from '../../../../../hooks/typedHooks.ts'

const HomeNavigation = () => {
	const pathname = window.location.href
	const notifications = useAppSelector(state => state.friendRequests.notifications)
	return (
		<section className={'pl-2.5 pr-0.5 pt-2.5'}>
			<nav>
				<ul>
					<li>
						<Link
							to={'/'}
							className={`group flex items-center justify-between rounded-[0.3125rem] px-2.5 py-2 text-[#8e9297] hover:bg-hover hover:no-underline ${pathname === 'http://localhost:5173/' ? 'bg-hover' : ''}`}
						>
							<div className={'flex'}>
								<Friends
									className={`fill-[#8e9297] group-hover:fill-[#fff] ${pathname === 'http://localhost:5173/' ? 'fill-[#fff]' : ''}`}
								/>
								<p
									className={`ml-[1.0625rem] font-medium group-hover:text-[#fff] ${pathname === 'http://localhost:5173/' ? 'text-[#fff]' : ''}`}
								>
									Friends
								</p>
							</div>
							{notifications > 0 && (
								<span
									className={
										'flex h-4 w-4 items-center justify-center rounded-full bg-[#f23f43] text-[0.75rem] font-bold text-white'
									}
								>
									{notifications}
								</span>
							)}
						</Link>
					</li>
					<li className={'mt-0.5'}>
						<Link
							to={'/'}
							className={`group flex items-center rounded-[0.3125rem] px-2.5 py-2 text-[#8e9297] hover:bg-hover hover:no-underline ${pathname === 'http://localhost:5173/nitro' ? 'bg-hover' : ''}`}
						>
							<DSNitro
								className={`fill-[#8e9297] group-hover:fill-[#fff] ${pathname === 'http://localhost:5173/nitro' ? 'fill-[#fff]' : ''}`}
							/>
							<p
								className={`ml-[1.0625rem] font-medium group-hover:text-[#fff] ${pathname === 'http://localhost:5173/nitro' ? 'text-[#fff]' : ''}`}
							>
								Nitro
							</p>
						</Link>
					</li>
					<li className={'mt-0.5'}>
						<Link
							to={'/'}
							className={`group flex items-center rounded-[0.3125rem] px-2.5 py-2 text-[#8e9297] hover:bg-hover hover:no-underline ${pathname === 'http://localhost:5173/shop' ? 'bg-hover' : ''}`}
						>
							<Shop
								className={`fill-[#8e9297] group-hover:fill-[#fff] ${pathname === 'http://localhost:5173/shop' ? 'fill-[#fff]' : ''}`}
							/>
							<p
								className={`ml-[1.0625rem] font-medium group-hover:text-[#fff] ${pathname === 'http://localhost:5173/shop' ? 'text-[#fff]' : ''}`}
							>
								Shop
							</p>
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default HomeNavigation
