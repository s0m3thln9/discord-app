import qrCode from '../../assets/img/qr-code.png'

const AuthorizationQRCode = () => {
	return (
		<div className={'grid place-items-center max-lg:hidden'}>
			<img src={qrCode} alt="" />
			<h2 className={'mt-8 text-center text-2xl font-semibold text-[#f2f3f5]'}>Log in with QR Code</h2>
			<p className={'mt-2 text-center font-medium text-[#b5bac1]'}>
				Scan this with the <strong>Discord mobile app</strong> to log in instantly.
			</p>
		</div>
	)
}

export default AuthorizationQRCode
