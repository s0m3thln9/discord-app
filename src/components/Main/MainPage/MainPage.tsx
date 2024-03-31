import Navigation from './Navigation/Navigation.tsx'
import Content from './Content/Content.tsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	toggleSettings: () => void
}

const MainPage = ({ toggleSettings, className }: Props) => {
	return (
		<div className={`absolute flex w-[100vw] transition duration-300 ${className}`}>
			<Navigation />
			<Content toggleSettings={toggleSettings} />
		</div>
	)
}

export default MainPage
