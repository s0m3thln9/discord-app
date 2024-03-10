import styles from './Loader.module.css'

const Loader = () => {
	return (
		<div className={'flex w-8 justify-center'}>
			<div className={styles.loader}></div>
		</div>
	)
}

export default Loader
