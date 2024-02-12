import styled from 'styled-components'
import TextButton from '../UI/Button/TextButton.tsx'
import { Link } from 'react-router-dom'
import { Close, DSLogo, DSNitro, Friends, Plus, Shop } from '../../../public/svgs.tsx'
import Tooltip from '../UI/Tooltip/Tooltip.tsx'

const Sidebar = styled.aside`
	background: ${({ theme }) => theme.colors.sidebarBackground};
	width: 15rem;
	section {
		padding: 0.625rem;
		&.findConv {
			border-bottom: 1px solid ${({ theme }) => theme.colors.background2};
		}
		&.sections {
			li {
				&:not(:first-child) {
					margin-top: 0.125rem;
				}
				a {
					border-radius: 0.3125rem;
					padding: 0.625rem 0.8125rem;
					display: flex;
					align-items: center;
					color: #8e9297;
					text-decoration: none;
					svg {
						fill: #8e9297;
					}
					&.active,
					&:hover {
						background: ${({ theme }) => theme.colors.navSectionHover};
						p {
							color: #fff;
						}
						svg {
							fill: #fff;
						}
					}
					p {
						margin-left: 1.0625rem;
					}
				}
			}
		}
		&.direct-messages {
			.headline {
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: default;
				&:hover {
					h4 {
						color: #dbdee1;
					}
				}
				.create-dm-btn-container:hover {
					svg {
						fill: #dbdee1;
					}
				}
				h4 {
					color: ${({ theme }) => theme.colors.subText};
					margin-left: 0.5rem;
					text-transform: uppercase;
					font-size: 0.75rem;
				}
				.create-dm-btn-container {
					margin-right: 0.5rem;
					display: flex;
					width: 1rem;
					height: 1rem;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					position: relative;
					svg {
						fill: ${({ theme }) => theme.colors.subText};
						height: 0.5rem;
						width: 0.5rem;
					}
				}
			}
			ul {
				margin-top: 0.25rem;
				li {
					padding-top: 2px;
					a {
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: ${({ theme }) => theme.colors.subText};
						text-decoration: none;
						border-radius: 0.25rem;
						padding: 0 0.5rem;
						height: 2.625rem;
						&:hover {
							background: #35373c;
							.aside-dm-title {
								.aside-dm-image-container {
									.status-indicator {
										border: 0.225rem solid #35373c;
										&::before {
											background: #35373c;
										}
									}
								}
								p {
									color: #dbdee1;
								}
							}
							.aside-dm-close-btn {
								display: flex;
							}
						}
						.aside-dm-title {
							display: flex;
							align-items: center;
							.aside-dm-image-container {
								width: 2rem;
								height: 2rem;
								position: relative;
								img {
									width: 2rem;
									border-radius: 50%;
								}
								.aside-dm-image {
									width: 2rem;
									height: 2rem;
									border-radius: 50%;
									display: flex;
									justify-content: center;
									align-items: center;
								}
								.status-indicator {
									position: absolute;
									bottom: -0.125rem;
									right: -0.125rem;
									width: 1rem;
									height: 1rem;
									border-radius: 50%;
									border: 0.225rem solid ${({ theme }) => theme.colors.sidebarBackground};
									display: flex;
									justify-content: center;
									align-items: center;
									&.offline {
										background: ${({ theme }) => theme.colors.subText};
										&::before {
											content: '';
											background: ${({ theme }) => theme.colors.sidebarBackground};
											display: flex;
											width: 0.3rem;
											height: 0.3rem;
											border-radius: 50%;
										}
									}
									&.online {
										background: ${({ theme }) => theme.colors.online};
									}
								}
							}
							& > p {
								margin-left: 0.75rem;
								font-weight: 500;
							}
						}
						.aside-dm-close-btn {
							padding: 0.25rem;
							display: none;
							&:hover {
								svg {
									fill: #dbdee1;
								}
							}
							svg {
								width: 0.75rem;
								height: 0.75em;
							}
						}
					}
				}
			}
		}
	}
`

type Channel = {
	id: number
	image: string | null
	name: string
	type: 'user' | 'group'
	color: 'orange' | 'red' | 'green' | 'blue' | 'yellow'
	status: 'offline' | 'online' | 'idle' | 'doNotDisturb'
}

const Content = () => {
	const pathname = window.location.href

	const channels: Channel[] = [
		{
			id: 1,
			image: '../../../public/img/testUserImage.webp',
			name: 'Smth',
			type: 'user',
			color: 'orange',
			status: 'offline',
		},
		{
			id: 2,
			image: '../../../public/img/testUserImage.webp',
			name: 'Lolexxxx',
			type: 'user',
			color: 'orange',
			status: 'online',
		},
		{
			id: 2,
			image: null,
			name: 'Smth, Lolexxxx',
			type: 'group',
			color: 'orange',
			status: 'online',
		},
	]

	return (
		<Sidebar>
			<section className={'findConv'}>
				<TextButton>Find or start a conversation</TextButton>
			</section>
			<section className={'sections'}>
				<nav>
					<ul>
						<li>
							<Link to={'/'} className={`${pathname === 'http://localhost:5173/' ? 'active' : ''} `}>
								<Friends />
								<p>Friends</p>
							</Link>
						</li>
						<li>
							<Link to={'/'}>
								<DSNitro />
								<p>Nitro</p>
							</Link>
						</li>
						<li>
							<Link to={'/'}>
								<Shop />
								<p>Shop</p>
							</Link>
						</li>
					</ul>
				</nav>
			</section>
			<section className={'direct-messages'}>
				<div className={'headline'}>
					<h4>Direct Messages</h4>
					<div className="create-dm-btn-container tooltip-container">
						<Plus />
						<Tooltip
							text={'Create DM'}
							position={{ vertical: 'top', horizontal: 'center' }}
							space={{ vertical: '-1rem', horizontal: '0' }}
						/>
					</div>
				</div>
				<ul>
					{channels.map(channel => (
						<li key={channel.id}>
							<Link to={'/'}>
								<div className={'aside-dm-title'}>
									<div className={'aside-dm-image-container'}>
										{channel.image ? (
											<img src={channel.image} alt="userImage" />
										) : (
											<div className={'aside-dm-image'} style={{ background: channel.color }}>
												<DSLogo width={20} height={20} />
											</div>
										)}

										{channel.type === 'user' ? (
											<div className={`status-indicator tooltip-container ${channel.status}`}>
												<Tooltip
													text={`${channel.status[0].toUpperCase()}${channel.status.substring(1)}`}
													position={{ vertical: 'top', horizontal: 'center' }}
													space={{ vertical: '-1rem', horizontal: '0' }}
												/>
											</div>
										) : (
											''
										)}
									</div>
									<p>{channel.name}</p>
								</div>
								<div className={'aside-dm-close-btn'}>
									<Close />
								</div>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</Sidebar>
	)
}

export default Content
