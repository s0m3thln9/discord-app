import { Link } from 'react-router-dom'
import { DSNitro, Friends, Shop } from '../../../../public/svgs.tsx'

const HomeNavigation = () => {
	const pathname = window.location.href
	return (
		<section className={'pt-2.5 pl-2.5 pr-0.5'}>
			<nav>
				<ul>
					<li>
						<Link
							to={'/'}
							className={`group rounded-[0.3125rem] px-2.5 py-2 flex items-center text-[#8e9297] hover:no-underline hover:bg-hover ${pathname === 'http://localhost:5173/' ? 'bg-hover' : ''}`}
						>
							<Friends
								className={`group-hover:fill-[#fff] fill-[#8e9297] ${pathname === 'http://localhost:5173/' ? 'fill-[#fff]' : ''}`}
							/>
							<p
								className={`ml-[1.0625rem] group-hover:text-[#fff] font-medium ${pathname === 'http://localhost:5173/' ? 'text-[#fff]' : ''}`}
							>
								Friends
							</p>
						</Link>
					</li>
					<li className={'mt-0.5'}>
						<Link
							to={'/'}
							className={`group rounded-[0.3125rem] px-2.5 py-2 flex items-center text-[#8e9297] hover:no-underline hover:bg-hover ${pathname === 'http://localhost:5173/nitro' ? 'bg-hover' : ''}`}
						>
							<DSNitro
								className={`group-hover:fill-[#fff] fill-[#8e9297] ${pathname === 'http://localhost:5173/nitro' ? 'fill-[#fff]' : ''}`}
							/>
							<p
								className={`ml-[1.0625rem] group-hover:text-[#fff] font-medium ${pathname === 'http://localhost:5173/nitro' ? 'text-[#fff]' : ''}`}
							>
								Nitro
							</p>
						</Link>
					</li>
					<li className={'mt-0.5'}>
						<Link
							to={'/'}
							className={`group rounded-[0.3125rem] px-2.5 py-2 flex items-center text-[#8e9297] hover:no-underline hover:bg-hover ${pathname === 'http://localhost:5173/shop' ? 'bg-hover' : ''}`}
						>
							<Shop
								className={`group-hover:fill-[#fff] fill-[#8e9297] ${pathname === 'http://localhost:5173/shop' ? 'fill-[#fff]' : ''}`}
							/>
							<p
								className={`ml-[1.0625rem] group-hover:text-[#fff] font-medium ${pathname === 'http://localhost:5173/shop' ? 'text-[#fff]' : ''}`}
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
