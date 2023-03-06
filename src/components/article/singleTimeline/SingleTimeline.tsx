import styles from './SingleTimeline.module.sass'
import { Link } from 'react-router-dom'
import { Article } from '../../../types/News.types'
import { useEffect, useState } from 'react'

interface Props {
  article: Article
}

export default function Single({ article }: Props) {
  const [time, setTime] = useState(String)

  useEffect(() => {
    //Convert to datetime
    const datetime = new Date(article.timestamp)

    //Convert to right format
    const formattedTime = datetime.getHours() + ':' + datetime.getMinutes()

    //Set variable
    setTime(formattedTime)
  }, [article.timestamp])

  return (
    <li className={styles.listItem}>
      <Link to={'/article/' + article.id}>
        <span>{time} </span>
        <p>{article.title}</p>
      </Link>
    </li>
  )
}
