import React, { Component } from 'react'
import Layout from './layout'
import {graphql} from 'gatsby';

//Static Query can be used anywhere, doesn't accept variables and can't use context more flexible 
//Page Query Must be used on pages less flexible 

export default class postLayout extends Component {
    render() {
        return (
            <Layout>
                <h1>Post Layout</h1>
            </Layout>
        )
    }
}


export const query = graphql` 
query PostQuery {
  markdownRemark(frontmatter: {
    slug: {
      eq: "/third-post"
    }
  }) {
    html
    frontmatter {
      title
      date
      slug
    }
  }
}`