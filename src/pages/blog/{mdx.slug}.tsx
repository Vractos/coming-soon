import * as React from 'react'
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }: PageProps<Queries.PostQuery>) => {
  const image = getImage(data.mdx?.frontmatter?.hero_image)

  return (
    <Layout pageTitle={data.mdx!.frontmatter!.title}>
      <p>{data.mdx?.frontmatter?.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx?.frontmatter?.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx?.frontmatter?.hero_image_credit_link}>
          {data.mdx?.frontmatter?.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>
        {data.mdx!.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost