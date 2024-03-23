import changePhone from '../../../../../assets/img/changePhone.svg'
import { Arrow, Cross, Search } from '../../../../../assets/svgs.tsx'
import clsx from 'clsx'
import Button from '../../../../UI/Button/Button.tsx'
import { updateUserPhoneNumber } from '../../../../../store/slices/authUserSlice.ts'
import Loader from '../../../../UI/Loader/Loader.tsx'
import Input from '../../../../UI/Input/Input.tsx'
import { cn } from '../../../../../utils/cn.ts'
import Modal from '../../../../UI/DiallogPopover/Modal.tsx'
import { useEffect, useRef, useState } from 'react'
import countries, { CountryForSelect } from './countriesForSelect.ts'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/typedHooks.ts'
import { useUpdatePhoneNumberMutation } from '../../../../../api/api.ts'

type Props = {
	showEditPhoneNumberModal: boolean
	setShowEditPhoneNumberModal: (showEditPhoneNumberModal: boolean) => void
}

const EditPhoneNumberModal = ({ showEditPhoneNumberModal, setShowEditPhoneNumberModal }: Props) => {
	const user = useAppSelector(state => state.auth.user)
	const [isChoosePhonePopoverOpen, setIsChoosePhonePopoverOpen] = useState(false)
	const [newPhoneNumber, setNewPhoneNumber] = useState(user?.phoneNumber || '')
	const [chosenPhone, setChosenPhone] = useState<CountryForSelect>(
		countries.find(country => country.code === `${user?.phoneCode}`) || countries[0],
	)
	const [countrySearch, setCountrySearch] = useState('')
	const filteredCountries = countries.filter(country => country.country.indexOf(countrySearch) != -1)

	const updatePhoneNumberMutation = useUpdatePhoneNumberMutation()

	const dispatch = useAppDispatch()

	const editPhoneNumberPopover = useRef<HTMLDivElement>(null)

	const handleClickOutside = (e: MouseEvent) => {
		if (editPhoneNumberPopover.current && !editPhoneNumberPopover.current.contains(e.target as Node)) {
			setIsChoosePhonePopoverOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleClose = () => {
		setShowEditPhoneNumberModal(false)
		setIsChoosePhonePopoverOpen(false)
	}

	const toggleChoosePhonePopover = () => {
		setIsChoosePhonePopoverOpen(current => !current)
	}

	return (
		<Modal isOpen={showEditPhoneNumberModal} handleClose={handleClose} className={'relative pt-16'}>
			<img src={changePhone} alt="changePhone" className={'absolute -top-40 left-1/2 -translate-x-1/2'} />
			<div className={'relative flex items-center justify-between'}>
				<div className={'flex grow flex-col items-center justify-center px-4 py-6 pb-0'}>
					<h2 className={'text-md text-center text-2xl font-bold text-[white]'}>Enter a Phone Number</h2>
					<p className={'mt-1'}>You will receive a text message with a verification code.</p>
					<p className={'mt-4 text-center'}>
						Your phone number can be used to verify <strong>one Discord account</strong> at <br /> a time
						and is only used for verification and login.
					</p>
				</div>
			</div>
			<div className={'p-4'}>
				<div className={'relative flex items-center rounded-[0.1875rem] bg-[#1e1f22] p-2'}>
					<Button
						variant={'primary'}
						onClick={toggleChoosePhonePopover}
						className={'h-8 bg-[#4e5058] pl-3 pr-2 hover:bg-[#6d6f78]'}
					>
						<span className={'pr-2'}>+{chosenPhone.code}</span>
						<Arrow
							className={clsx(
								`stroke-white stroke-[3px]`,
								!isChoosePhonePopoverOpen ? '-rotate-90' : 'rotate-0',
							)}
						/>
					</Button>
					<input
						type="text"
						value={newPhoneNumber}
						onChange={e => setNewPhoneNumber(e.target.value)}
						className={'mx-2 w-full grow bg-[transparent] font-medium text-[#dbdee1] outline-0'}
					/>
					<Button
						variant={'primary'}
						className={'h-8 w-fit'}
						onClick={async () => {
							const response = await updatePhoneNumberMutation[0]({
								...chosenPhone,
								phoneNum: newPhoneNumber,
							}).unwrap()
							if (response.success && response.payload) {
								dispatch(
									updateUserPhoneNumber({
										phoneNumber: response.payload.user.phoneNumber || '',
										code: response.payload.user.phoneCode || 0,
									}),
								)
								setIsChoosePhonePopoverOpen(false)
								setShowEditPhoneNumberModal(false)
							}
							console.log(response)
						}}
					>
						{!updatePhoneNumberMutation[1].isLoading ? 'Send' : <Loader />}
					</Button>
					<div
						className={clsx(
							'pointer-events-none absolute bottom-1 left-0 w-60 translate-y-[100%] rounded-[5px] bg-[#313338] px-2.5 pt-2.5 opacity-0',
							isChoosePhonePopoverOpen && 'pointer-events-auto opacity-100',
						)}
						id={'phoneNumberPopover'}
						ref={editPhoneNumberPopover}
					>
						<div className={'flex items-center bg-[#1e1f22]'}>
							<div className={'grow'}>
								<Input
									id={'countrySearch'}
									placeholder={'Search a country'}
									className={'h-5 px-1 py-0 text-sm leading-[1.25rem]'}
									value={countrySearch}
									onChange={e => setCountrySearch(e.target.value)}
								/>
							</div>
							<div className={'relative mr-1 flex h-4 w-4'}>
								<Search
									className={cn(
										`absolute left-1/2 top-1/2 w-4 -translate-x-1/2 -translate-y-1/2 rotate-0 fill-white opacity-100 transition`,
										countrySearch && 'rotate-180 opacity-0',
									)}
								/>
								<Cross
									className={cn(
										`absolute left-1/2 top-1/2 w-4 -translate-x-1/2 -translate-y-1/2 rotate-180 fill-white opacity-100 transition`,
										!countrySearch && 'rotate-0 opacity-0',
									)}
								/>
							</div>
						</div>
						<div className={'my-2 h-[1px] bg-[#3f4147]'}></div>
						<ul className={'h-60 overflow-y-scroll pb-2.5'}>
							{filteredCountries.map(country => (
								<li
									key={country.iso}
									className={
										'flex h-[2.125rem] cursor-pointer items-center justify-between rounded px-2 py-2.5 hover:bg-[#26272a]'
									}
									onClick={() => {
										setChosenPhone(country)
										setIsChoosePhonePopoverOpen(false)
									}}
								>
									<p className={'text-[13px]'}>{country.country}</p>
									<p className={'text-[13px] font-bold text-white'}>+{country.code}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default EditPhoneNumberModal
