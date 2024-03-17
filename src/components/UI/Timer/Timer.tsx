import { useEffect, useRef, useState } from 'react'

const Timer = () => {
	const [time, setTime] = useState(0)
	const intervalRef = useRef<NodeJS.Timeout>()

	useEffect(() => {
		setInterval(() => {
			setTime(time + 1)
		}, 1000)

		return () => {
			clearInterval(intervalRef.current)
		}
	}, [time])

	if (time < 3600) {
		return (
			<span>
				{Math.floor(time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}:
				{time % 60 > 9 ? time % 60 : `0${time % 60}`}
			</span>
		)
	}
	return ':)'
}

export default Timer
