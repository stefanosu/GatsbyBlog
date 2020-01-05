import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { render } from "react-dom"

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {  
      allMarkdownRemark {
          edges {
            node {
              frontmatter{
                title
                slug 
              }
            }
          }
        }
      }
  `)
}
  
  render={({allMarkdownRemark}) => (
    <>
      <div>
        <aside>
          <h3>Archive</h3>
          {allMarkdownRemark}
        </aside>
      </div>
    </>
  )}


export default Archive
