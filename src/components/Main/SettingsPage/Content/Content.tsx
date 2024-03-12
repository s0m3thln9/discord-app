import { Cross } from '../../../../../public/svgs.tsx'
import Button from '../../../UI/Button/Button.tsx'
import Pages from './Pages/Pages.tsx'
import { SettingList } from '../SettingsPage.tsx'

type Props = {
	toggleSettings: () => void
	currentSetting: SettingList
	setCurrentSetting: (newSetting: SettingList) => void
}

const Content = ({ toggleSettings, currentSetting, setCurrentSetting }: Props) => {
	return (
		<div className={'flex flex-[1_1_800px] pb-[5rem] pt-[3.75rem]'}>
			<div className={'w-[740px] px-10 '}>
				<Pages page={currentSetting} setCurrentSetting={setCurrentSetting} />
			</div>
			<Button
				variant={'text'}
				onClick={toggleSettings}
				className={'group mr-5 flex flex-col justify-center hover:bg-content'}
			>
				<div
					className={
						'border-gray-300 flex h-8 w-8 items-center justify-center rounded-full border-2 group-hover:fill-[#dbdee1]'
					}
				>
					<Cross className={'fill-[#b5bac1]'} />
				</div>
				<p className={'mt-2 text-xs font-bold'}>ESC</p>
			</Button>
		</div>
	)
}

export default Content
