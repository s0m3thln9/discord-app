const Input = ({ errors, register, id, type, label, help, classes, required, pattern, minLength, maxLength }) => {


	return (
		<div>
			{label &&
				<label
					className={`text-xs font-bold uppercase tracking-wide ${errors[id] ? 'text-[#fa777c]' : 'text-[#b5bac1]'}`}
					htmlFor={id}
				>
					{label}
					{required &&
						<span className={`normal-case ${errors[id] ? 'text-[#fa777c]' : 'text-[#f23f42]'}`}>
							{errors[id] ? ' - ' + errors[id].message : ' *'}
						</span>
					}
				</label>
			}
			<input
				className={`outline-0 w-full h-10 p-2.5 font-medium rounded-[0.1875rem] bg-[#1e1f22] text-[#dbdee1] peer ${classes}`}
				id={id}
				type={type}
				{...register(
					id,
					{
						required: required,
						pattern: pattern,
						minLength: minLength,
						maxLength: maxLength,
					},
				)}
			/>
			{help &&
				<div className={`tracking-tight text-sm font-medium text-[#dbdee1] duration-300 mt-0 pb-0 h-0 opacity-0 peer-focus:-mt-3 peer-focus:pb-10 peer-focus:opacity-100`}>
					{help}
				</div>
			}
		</div>
	)
}

export default Input