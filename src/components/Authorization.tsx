import styled from 'styled-components'

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("/public/img/auth-background.jpg");
`

const StyledTitle = styled.h2`
    font-family: Whitney, sans-serif;
`

const StyledMain = styled.main`
    width: 784px;
    border-radius: 5px;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.colors.mainBackground};
`

const Authorization = () => {
	return (
		<StyledBackground>
			<StyledMain>
				<div>
					<StyledTitle>С возвращением</StyledTitle>
					<p>Мы так рады видеть вас снова!</p>
					<form action="">
						<label htmlFor="">Адрес электронной почты</label>
						<input type="text" />
						<label htmlFor="">Пароль</label>
						<input type="text" />
						<a href="">Забыли пароль?</a>
						<button>Вход</button>
						<p>Нужна учётная запись? <a href="">Зарегистрироваться</a></p>
					</form>
				</div>
				<div>
					<img src="/public/img/qr-code.png" alt="" />
					<StyledTitle>Войти с помощью QR-кода</StyledTitle>
					<p>Отсканируйте код с помощью <span>мобильного приложения Discord</span>, чтобы сразу же войти в
						систему.</p>
				</div>
			</StyledMain>
		</StyledBackground>
	)
}

export default Authorization