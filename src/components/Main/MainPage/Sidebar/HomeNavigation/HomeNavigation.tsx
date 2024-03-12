import { Link } from 'react-router-dom'
import { DSNitro, Friends, Shop } from '../../../../../assets/svgs.tsx'

const HomeNavigation = () => {
	const pathname = window.location.href
	return (
		<section className={'pl-2.5 pr-0.5 pt-2.5'}>
			<nav>
				<ul>
					<li>
						<Link
							to={'/'}
							className={`group flex items-center rounded-[0.3125rem] px-2.5 py-2 text-[#8e9297] hover:bg-hover hover:no-underline ${pathname === 'http://localhost:5173/' ? 'bg-hover' : ''}`}
						>
							<Friends
								className={`fill-[#8e9297] group-hover:fill-[#fff] ${pathname === 'http://localhost:5173/' ? 'fill-[#fff]' : ''}`}
							/>
							<p
								className={`ml-[1.0625rem] font-medium group-hover:text-[#fff] ${pathname === 'http://localhost:5173/' ? 'text-[#fff]' : ''}`}
							>
								Friends
							</p>
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
