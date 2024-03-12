const ActiveNow = () => {
	return (
		<section className={'w-[22.5rem] border-l-[1px] border-l-[#3b3d43] p-4 max-2xl:hidden'}>
			<h2 className={'mb-4 mt-2 text-xl font-extrabold text-white'}>Active Now</h2>
			<div className={'mt-4 p-4'}>
				<h4 className={'text-center text-white'}>It's quiet for now...</h4>
				<p className={'mt-1 text-center text-sm'}>
					{' '}
					When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!
				</p>
			</div>
		</section>
	)
}

export default ActiveNow
