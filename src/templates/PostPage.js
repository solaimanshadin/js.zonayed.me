import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'
import Catalog from '../components/catalog'

import './postpage.css'

const PostPage = ({ path, pageContext: { data, allData } }) => {
  const title = data.title.rendered
  return (
    <Layout>
      <SEO title={title} />
      <div className="post-area">
        <Post title={title} content={data.content.rendered} />
        <Catalog path={path} topics={allData} />
      </div>
    </Layout>
  )
}

export default PostPage
