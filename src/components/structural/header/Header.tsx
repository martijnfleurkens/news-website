import styles from './Header.module.sass'
import { Link } from 'react-router-dom'

export default function HomeView() {
  return (
    <header className={styles.defaultHeader}>
      <div className="container">
        <Link
          to="/"
          className={styles.logo}
          data-link-type="nav"
          data-link-name="NewsWave home logo"
        >
          <b>N</b>EWS<b>W</b>AVE
        </Link>
      </div>
    </header>
  )
}
