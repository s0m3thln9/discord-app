import FriendsSection from '../Friends/Friends.tsx'
import MainSidebar from '../Sidebar/MainSidebar.tsx'

type Props = {
	toggleSettings: () => void
}

const Content = ({ toggleSettings }: Props) => {
	return (
		<>
			<MainSidebar toggleSettings={toggleSettings} />
			<FriendsSection />
		</>
	)
}

export default Content
