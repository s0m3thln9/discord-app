type Placeholder = {
	id: number
}

const SettingsSidebarSuspense = () => {
	const placeholders: Placeholder[] = []
	for (let i = 0; i < 25; i++) {
		placeholders.push({
			id: i + 1,
		})
	}
	return (
		<aside className={`flex-[1_0_auto] bg-sidebar`}>
			<div className={'flex h-svh w-full justify-end overflow-y-scroll pl-5 pr-1.5'}>
				<div className={'h-fit w-[13.625rem] py-[3.75rem]'}>
					<ul>
						{placeholders.map(({ id }) => (
							<li key={id} className={'mt-2 flex h-8 w-full items-center'}>
								<span className={'mt-2 h-4 w-[70%] rounded-full bg-hover'}></span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</aside>
	)
}

export default SettingsSidebarSuspense
