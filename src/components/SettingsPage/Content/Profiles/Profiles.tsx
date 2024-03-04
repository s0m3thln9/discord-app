import Headline from '../../../UI/Headline/Headline'
import { useAppSelector } from '../../../../hooks/typedHooks.ts'
import { useState } from 'react'
import FormInput from '../../../UI/Input/FormInput.tsx'

const Profiles = () => {
	const user = useAppSelector(state => state.auth.user)

	const [displayName, setDisplayName] = useState(user?.displayName)
	const [pronouns, setPronouns] = useState('')

	return (
		<div>
			<h2 className={'text-xl font-semibold text-[white]'}>Profiles</h2>
			<div className={'mt-8 flex justify-between'}>
				<div className={'w-[calc(50%-1rem)]'}>
					<Headline>Display name</Headline>
					<FormInput label={'Display name'} type={'text'} id={'displayName'} />
					{/*<input
						type="text"
						placeholder={'Enter new display name'}
						value={displayName}
						onChange={e => setDisplayName(e.target.value)}
						className={'text-white mt-2 h-10 w-full rounded bg-[#1e1f22] p-2.5'}
					/>*/}
					<div className={'my-6 h-[1px] w-full bg-[#3b3d43] leading-5'}></div>
					<Headline>Pronouns</Headline>
					<input
						type="text"
						placeholder={'Add your pronouns'}
						value={pronouns}
						onChange={e => setPronouns(e.target.value)}
						className={'text-white mt-2 h-10 w-full rounded bg-[#1e1f22] p-2.5'}
					/>
					<div className={'my-6 h-[1px] w-full bg-[#3b3d43] leading-5'}></div>
				</div>
				<div className={'w-[calc(50%-1rem)]'}>
					<Headline>Preview</Headline>
				</div>
			</div>
		</div>
	)
}

export default Profiles
