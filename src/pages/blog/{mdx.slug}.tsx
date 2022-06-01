import * as React from 'react'
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }: PageProps<Queries.PostQuery>) => {
  return (
    <Layout pageTitle={data.mdx!.frontmatter!.title}>
      <p>{data.mdx?.frontmatter?.date}</p>
      <MDXRenderer>
        {data.mdx!.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost