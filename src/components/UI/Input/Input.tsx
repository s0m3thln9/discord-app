const Input = ({errors, register, label, required}) => {



	return (
		<>
			<label
				className={`text-xs font-bold uppercase tracking-wide ${errors.email ? `text-[#fa777c]` : 'text-[#b5bac1]'}`}
				htmlFor="email"
			>
				email
				<span className={`normal-case ${errors.email ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
								{errors.email ? ' - ' + errors.email.message : ' *'}
							</span>
			</label>
			<input
				className={'outline-0 mt-2 mb-4 w-full h-10 p-[0.625rem] font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1]'}
				id={'email'}
				type={'email'}
				{...register(
					'email',
					{ required: 'Required' },
				)}
			/>
		</>
	)
}

export default Input