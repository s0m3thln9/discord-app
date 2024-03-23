import loadingAnimation from './../../assets/video/loader.mp4'

const Preloader = () => {
	return (
		<div className={'flex h-svh w-full items-center justify-center bg-[#26262b]'}>
			<div className={'flex h-[30rem] flex-col items-center'}>
				<video src={loadingAnimation} autoPlay={true} loop={true} muted={true}></video>
				<h1 className={'text-3xl font-bold text-white'}>Loading...</h1>
			</div>
		</div>
	)
}

export default Preloader
