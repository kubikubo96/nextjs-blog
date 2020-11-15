import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello everyone!]</p>
        <p>
          (My Posts {' '}
          <Link href="/posts/first-post"><a>best post</a></Link>.)
        </p>
      </section>
    </Layout>
  )
}