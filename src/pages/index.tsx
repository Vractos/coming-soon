import * as React from "react"
import Header from '../components/Header'
import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header/>
      <div className="h-full bg-atrati-gray md:bg-transparent md:bg-[url('../images/wave3.svg')]  bg-no-repeat md:bg-right-bottom">
      </div>
    </Layout>
  )
}

export default IndexPage
