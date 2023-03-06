import styles from './OverviewPopular.module.sass'
import { useSelector } from 'react-redux'
import { State } from '../../../stores'
import { Article } from '../../../types/News.types'
import ArticleSingle from '../single/Single'
import ArticleThumbnail from '../thumbnail/Thumbnail'

export default function HomeView() {
  //Select news form store
  const newsState = useSelector((state: State) => state.news)

  //Sort news by popularity
  const newsByPopularity = () => {
    //Get list from state
    const newArticleList = [...newsState.articles]

    //Order by popularity
    newArticleList.sort((a, b) => {
      if (a.popularity <= b.popularity) {
        return 1
      }
      return -1
    })

    //Return
    return newArticleList
  }

  //Get list - remove thumbnail
  const newsList = () => {
    //Get list sorted on popularity
    const newArticleList = newsByPopularity()

    //Remove first from list
    newArticleList.shift()

    //Return
    return newArticleList
  }

  //Get first newsitem for thumbnail
  const newsThumbnail = () => {
    //Get list sorted on popularity
    const newArticleList = newsByPopularity()

    //Return 1
    const thumbnail = newArticleList[0]

    return thumbnail
  }

  return (
    <div>
      {newsState.loaded ? (
        <>
          <ArticleThumbnail article={newsThumbnail()} />

          <ul className={styles.list}>
            {newsList().map((article: Article, index: number) => (
              <ArticleSingle key={index} article={article} />
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
