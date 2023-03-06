import styles from './Thumbnail.module.sass'
import { Link } from 'react-router-dom'
import { Article } from '../../../types/News.types'
import thumbnail from '@/assets/img/thumbnail.svg'

interface Props {
  article: Article
}

export default function Thumbnail({ article }: Props) {
  return (
    <Link to={'/article/' + article.id} className={styles.thumbnail}>
      <figure>
        <img src={thumbnail} alt={`Thumbnail image of ${article.title}`} width="850" height="420" />
        <figcaption>
          <h1 className="h4">{article.title}</h1>
        </figcaption>
      </figure>
    </Link>
  )
}
