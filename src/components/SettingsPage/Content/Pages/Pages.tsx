import { SettingList } from '../../SettingsPage.tsx'
import MyAccount from '../Settings/MyAccount/MyAccount.tsx'
import Profiles from '../Profiles/Profiles.tsx'

type Props = {
	page: SettingList
	setCurrentSetting: (newSetting: SettingList) => void
}

const Pages = ({ page, setCurrentSetting }: Props) => {
	switch (page) {
		case 'My Account':
			return <MyAccount setCurrentSetting={setCurrentSetting} />
		case 'Profiles':
			return <Profiles />
	}
}

export default Pages
