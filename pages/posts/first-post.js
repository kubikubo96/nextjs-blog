import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className="title-post">First Post</h1>
            <p>content posts</p>
        </Layout>
    )
}

export default FirstPost;