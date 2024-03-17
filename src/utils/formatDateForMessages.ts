const formatDateForMessages = (date: Date): string => {
	let month = String(date.getMonth() + 1).padStart(2, '0') // Месяцы начинаются с 0, поэтому добавляем 1
	let day = String(date.getDate()).padStart(2, '0')
	let year = date.getFullYear()
	let hours = date.getHours()
	let minutes = String(date.getMinutes()).padStart(2, '0')
	let ampm = hours >= 12 ? 'PM' : 'AM'
	hours = hours % 12
	hours = hours ? hours : 12 // Если часы равны 0, то делаем их 12
	hours = +String(hours).padStart(2, '0')

	return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`
}

export default formatDateForMessages
