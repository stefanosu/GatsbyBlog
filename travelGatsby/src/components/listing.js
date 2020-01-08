import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const LISTING_QUERY =  graphql `
query BlogPostListing {  
  allMarkdownRemark(limit:5, sort: {
    order:DESC
    fields: [frontmatter___date]
}) {
      edges {
        node {
          excerpt
          frontmatter{
            title
            slug 
            date(formatString: "MMMM, DD, YYYY")
          }
        }
      }
    }
  }
`

const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY)
    return (
      <>
      {data.allMarkdownRemark.edges.map(({node}) => 
      <article key={node.frontmatter.slug}> 
      <Link to={`/posts${node.frontmatter.slug}`}> 
        <h2>{node.frontmatter.title}</h2>
      </Link>
        <p>{node.excerpt}</p>
        <p>{node.frontmatter.date}</p>
        <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
      </article>
      )}
    </>
  )}

export default Listing
