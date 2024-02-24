import Navigation from '../Navigation/Navigation.tsx'
import Content from '../Content/Content.tsx'

export const Main = () => {
	return (
		<main className={'flex bg-[#313338]'}>
			<Navigation />
			<Content />
		</main>
	)
}
