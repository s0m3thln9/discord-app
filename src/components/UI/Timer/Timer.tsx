import { useEffect, useRef, useState } from 'react'

const Timer = () => {
	const [time, setTime] = useState(0)
	const intervalRef = useRef<NodeJS.Timeout>()

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTime(prevTime => prevTime + 1)
		}, 1000)

		return () => {
			clearInterval(intervalRef.current)
		}
	}, [])

	return <PrintTimer time={time} />
}

const PrintTimer = ({ time }: { time: number }) => {
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
