import Headline from '../../../UI/Headline/Headline'

const Profiles = () => {
	return (
		<div>
			<h2 className={'text-xl font-semibold text-[white]'}>Profiles</h2>
			<div className={'flex justify-between'}>
				<div>
					<Headline>Display name</Headline>
					<input
						type="text"
						placeholder={'Enter new display name'}
						className={'text-white ml-[1.875rem] mr-5 mt-4 h-[1.875rem] rounded bg-[#1e1f22] px-2'}
					/>
				</div>
				<div></div>
			</div>
		</div>
	)
}

export default Profiles
