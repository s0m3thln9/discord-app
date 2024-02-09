import styled from 'styled-components'

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("/public/img/auth-background.jpg");
    display: grid;
    place-content: center;
`

const StyledLogo = styled.img`
    display: none;
    margin-bottom: 16px;
    @media(max-width: 485px) {
        display: block;
    }
`

const StyledMain = styled.main`
    width: 784px;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.colors.mainBackground};
    padding: 32px;
    display: grid;
    grid-template-columns: 414px 240px;
    justify-content: space-between;
    @media (max-width: 830px) {
        grid-template-columns: 100%;
        width: 480px;
    }
    @media (max-width: 485px) {
        padding: 20px 16px;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }
`

const StyledWelcomeBlock = styled.div`
    width: 414px;
    display: grid;
    justify-items: center;
    @media(max-width: 485px) {
		align-content: start;
        width: auto;
        height: 100%;
    }
`

const StyledForm = styled.form`
    width: 100%;
    display: grid;
    margin-top: 20px;
`


const StyledQRBlock = styled.div`
    display: grid;
    justify-items: center;
	@media(max-width: 830px) {
        display: none;
    }
`

const StyledInputContainer = styled.div`
    display: grid;
    &:first-child {
        margin-bottom: 20px;
    }
`

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.inputColor};
`

const StyledButton = styled.button`
    width: 100%;
    height: 44px;
    display: grid;
	place-items: center;
    padding: 2px 16px;
    margin-bottom: 8px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.buttonColor};
	transition: .4s;
	cursor: pointer;
	&:hover {
        background: ${({ theme }) => theme.colors.buttonHoverBackground};
	}
`

const StyledLink = styled.a`
    width: fit-content;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};

    &:hover {
        text-decoration: underline;
    }
`

const StyledLinkWithMargin = styled(StyledLink)`
    margin: 4px 0 20px;
`

const StyledLabel = styled.label`
    font-size: 12px;
    line-height: 1.3333333333333333;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .02em;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.text};
`

const StyledTitle = styled.h2`
    font-size: 24px;
    line-height: 1.25;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 8px;
    text-align: center;
`

const StyledParagraph = styled.p`
    font-size: 16px;
    line-height: 1.25;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
`

const StyledSubParagraph = styled.p`
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.subText};
`

const StyledImg = styled.img`
    margin-bottom: 32px;
`

const Authorization = () => {
	return (
		<StyledBackground>
			<StyledMain>
				<StyledWelcomeBlock>
					<StyledLogo src="/public/img/discord-logo.svg" alt=""/>
					<StyledTitle>Welcome back!</StyledTitle>
					<StyledParagraph>We're so excited to see you again!</StyledParagraph>
					<StyledForm action="">
						<StyledInputContainer>
							<StyledLabel htmlFor="">EMAIL</StyledLabel>
							<StyledInput type="text" />
						</StyledInputContainer>
						<StyledInputContainer>
							<StyledLabel htmlFor="">PASSWORD</StyledLabel>
							<StyledInput type="text" />
						</StyledInputContainer>
						<StyledLinkWithMargin href="">Forgot your password?</StyledLinkWithMargin>
						<StyledButton>Log In</StyledButton>
						<StyledSubParagraph>Need an account? <StyledLink
							href="">Register</StyledLink></StyledSubParagraph>
					</StyledForm>
				</StyledWelcomeBlock>
				<StyledQRBlock>
					<StyledImg src="/public/img/qr-code.png" alt="" />
					<StyledTitle>Log in with QR Code</StyledTitle>
					<StyledParagraph>Scan this with the <strong>Discord mobile app</strong> to log in
						instantly.</StyledParagraph>
				</StyledQRBlock>
			</StyledMain>
		</StyledBackground>
	)
}

export default Authorization