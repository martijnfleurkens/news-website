import styles from './OverviewTimeline.module.sass'
import { useSelector } from 'react-redux'
import { State } from '../../../stores'
import { Article } from '../../../types/News.types'
import ArticleSingleTimeline from '../singleTimeline/SingleTimeline'

export default function HomeView() {
  //Select news form store
  const newsState = useSelector((state: State) => state.news)

  //Sort news by last date
  const newsByLastDate = () => {
    //Get list from state
    const newArticleList = [...newsState.articles]

    //Order by last date
    newArticleList.sort((a, b) => {
      if (new Date(a.timestamp) <= new Date(b.timestamp)) {
        return 1
      }
      return -1
    })

    //Return
    return newArticleList
  }

  //Get list - first 6 articles
  const newsList = () => {
    //Get list sorted on date
    let newArticleList = newsByLastDate()

    //get first 6 items
    newArticleList = newArticleList.slice(0, 6)

    //Return
    return newArticleList
  }

  return (
    <div>
      <h2 className="h4">Newest articles</h2>
      {newsState.loaded ? (
        <ul className={styles.list}>
          {newsList().map((article: Article, index: number) => (
            <ArticleSingleTimeline key={index} article={article} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
