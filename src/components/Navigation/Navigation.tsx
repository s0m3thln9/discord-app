import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Compas, DSLogo, Plus } from '../../../public/svgs.tsx'
import Tooltip from '../UI/Tooltip/Tooltip.tsx'

const StyledNavigation = styled.nav`
	width: 4.5rem;
	background: ${({ theme }) => theme.colors.background1};
	min-height: 100svh;
	ul {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		padding-top: 0.75rem;
	}
`

type ListProps = {
	$newMessages: number
}

const List = styled.li<ListProps>`
	position: relative;
	a {
		display: flex;
		align-items: center;
	}
	&:not(:first-child) {
		margin-top: 0.5rem;
	}
	&:not(.separator) {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: #000;
		display: grid;
		place-items: center;
		transition:
			border-radius 0.2s,
			background-color 0.2s;
		background: ${({ theme }) => theme.colors.mainBackground};
		position: relative;
		cursor: pointer;
		&::before {
			content: '';
			height: 0.5rem;
			width: 0.5rem;
			background: ${({ theme }) => theme.colors.title};
			border-radius: 0.25rem;
			position: absolute;
			left: -1rem;
			transition:
				height 0.3s,
				transform 0.3s;
			${({ $newMessages }) => ($newMessages ? '' : 'transform: translateX(-0.25rem);')}
		}
		&:not(.action-btn) {
			&:hover {
				border-radius: 1rem;
				background: ${({ theme }) => theme.colors.primary};
				&::before {
					transform: none;
					height: 1.5rem;
				}
			}
		}
		&.action-btn {
			path {
				transition: fill 0.3s;
				fill: ${({ theme }) => theme.colors.green360};
			}
			&:hover {
				border-radius: 1rem;
				background: ${({ theme }) => theme.colors.green360};
				path {
					fill: white;
				}
				&::before {
					transform: none;
					height: 1.5rem;
				}
			}
		}
	}
	&.separator {
		height: 0.125rem;
		width: 2rem;
		border-radius: 0.0625rem;
		background: #2d2f32;
	}
`

const Navigation = () => {
	return (
		<StyledNavigation>
			<ul>
				<List $newMessages={0} className={'tooltip-container'}>
					<Link to={'/'}>
						<DSLogo />
					</Link>
					<Tooltip
						text={'Direct Messages'}
						position={{ vertical: 'center', horizontal: 'right' }}
						space={{ vertical: '0', horizontal: '1.5rem' }}
					/>
				</List>
				<List className={'separator'} $newMessages={0}></List>
				<List className={'action-btn tooltip-container'} $newMessages={0}>
					<Link to={'/'}>
						<Plus />
					</Link>
					<Tooltip
						text={'Add a Server'}
						position={{ vertical: 'center', horizontal: 'right' }}
						space={{ vertical: '0', horizontal: '1.5rem' }}
					/>
				</List>
				<List className={'action-btn tooltip-container'} $newMessages={0}>
					<Link to={'/'}>
						<Compas />
					</Link>
					<Tooltip
						text={'Explore Discoverable Servers'}
						position={{ vertical: 'center', horizontal: 'right' }}
						space={{ vertical: '', horizontal: '1.5rem' }}
					/>
				</List>
			</ul>
		</StyledNavigation>
	)
}

export default Navigation
