import MainSidebar from '../Sidebar/MainSidebar.tsx'
import { Route, Routes } from 'react-router-dom'
import FriendPage from '../Friends/FriendPage/FriendPage.tsx'
import FriendsSection from '../Friends/Friends.tsx'

type Props = {
	toggleSettings: () => void
}

const Content = ({ toggleSettings }: Props) => {
	return (
		<>
			<MainSidebar toggleSettings={toggleSettings} />
			<Routes>
				<Route path={'/'} element={<FriendsSection />} />
				<Route path={'/:id'} element={<FriendPage type={'friend'} />} />
				<Route path={'/g/:id'} element={<FriendPage type={'group'} />} />
			</Routes>
		</>
	)
}

export default Content
