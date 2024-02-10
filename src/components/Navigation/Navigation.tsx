import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DSLogo } from '../../../public/svgs.tsx'

const StyledNavigation = styled.nav`
    width: 4.5rem;
	background: ${({theme}) => theme.colors.background1};
	min-height: 100svh;
	ul {
        display: flex;
		justify-content: center;
		padding-top: .75rem;
        li {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: #000;
            display: grid;
            place-items: center;
			transition: border-radius .2s, background-color .2s;
            background: ${({theme}) => theme.colors.mainBackground};
			position: relative;
			cursor: pointer;
			&::before {
				content: '';
				height: .5rem;
				width: .5rem;
				background: ${({theme}) => theme.colors.title};
				border-radius: .25rem;
				position: absolute;
				left: -1rem;
				transition: height .3s;
			}
            &:hover {
                border-radius: 1rem;
                background: ${({theme}) => theme.colors.primary};
				&::before {
					height: 1.5rem;
				}
            }
        }
	}
`

const Navigation = () => {
	return (
		<StyledNavigation>
			<ul>
				<li>
					<Link to={'#'}>
						<DSLogo />
					</Link>
				</li>
			</ul>
		</StyledNavigation>
	)
}

export default Navigation