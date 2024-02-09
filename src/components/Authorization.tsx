import styled from 'styled-components'

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("/public/img/auth-background.jpg");
`

const Authorization = () => {
	return (
		<StyledBackground>
			<main>
				<div>
					<h2>С возвращением</h2>
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
					<h2>Войти с помощью QR-кода</h2>
					<p>Отсканируйте код с помощью <span>мобильного приложения Discord</span>, чтобы сразу же войти в систему.</p>
				</div>
			</main>
		</StyledBackground>
	)
}

export default Authorization