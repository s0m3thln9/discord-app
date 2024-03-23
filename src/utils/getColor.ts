import { NoImageColors } from '../types/user.ts'

const getColor = (color: NoImageColors) => {
	switch (color) {
		case 'lime':
			return '#29c566'
		case 'yellow':
			return '#efbc12'
		case 'purple':
			return '#904fad'
		case 'red':
			return '#f44336'
		case 'green':
			return '#5cb85c'
		case 'blue':
			return '#3498db'
		case 'orange':
			return '#ffa500'
		case 'crimson':
			return '#e61b58'
		case 'pink':
			return '#eb459f'
	}
}

export default getColor
