import styles from './Single.module.sass'
import { Link } from 'react-router-dom'
import { Article } from '../../../types/News.types'

interface Props {
  article: Article
}

export default function Single({ article }: Props) {
  return (
    <li className={styles.listItem}>
      <Link to={'/article/' + article.id}>
        <span>{article.title}</span>
      </Link>
    </li>
  )
}
