const formatDateForMessagesTooltip = (dateString: Date): string => {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const date = new Date(dateString)
	const dayOfWeek = daysOfWeek[date.getDay()]
	const day = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	const ampm = hours >= 12 ? 'PM' : 'AM'

	hours = hours % 12
	hours = hours ? hours : 12 // Если часы равны 0, то делаем их 12

	// Добавляем ведущие нули, если необходимо
	minutes = +(minutes < 10 ? '0' + minutes : minutes)
	hours = +(hours < 10 ? '0' + hours : hours)

	return `${dayOfWeek}, ${day} ${month}, ${year} ${hours}:${minutes} ${ampm}`
}

export default formatDateForMessagesTooltip
