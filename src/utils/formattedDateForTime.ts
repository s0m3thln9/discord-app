const formattedDateForTime = (date: Date): string => {
	let hours = date.getHours()
	let minutes = String(date.getMinutes()).padStart(2, '0')
	let ampm = hours >= 12 ? 'PM' : 'AM'
	hours = hours % 12
	hours = hours ? hours : 12 // Если часы равны 0, то делаем их 12
	hours = +String(hours).padStart(2, '0')

	return `${hours}:${minutes} ${ampm}`
}

export default formattedDateForTime
