import styles from './HomeView.module.sass'
import { useEffect } from 'react'
import DefaultLayout from '../../layouts/defaultLayout/DefaultLayout'
import ArticleOverviewPopular from '../../components/article/overviewPopular/OverviewPopular'
import ArticleOverviewTimeline from '../../components/article/overviewTimeline/OverviewTimeline'
import news from '../../services/news/index'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../stores'

export default function HomeView() {
  const dispatch = useDispatch()

  const { updateNewsArticles } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    news.fetchNews().then((data: any) => {
      updateNewsArticles(data)
    })
  }, [])

  return (
    <DefaultLayout>
      <div className={styles.overviewWrapper}>
        <section className={styles.popularWrapper}>
          <ArticleOverviewPopular />
        </section>
        <aside className={styles.timelineWrapper}>
          <ArticleOverviewTimeline />
        </aside>
      </div>
    </DefaultLayout>
  )
}
