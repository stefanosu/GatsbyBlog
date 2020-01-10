/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Helmet from "react-helmet"
import Archive from './archive';
import styled from  'styled-components'

const MainLayout = styled.main `
  max-width: 90%
  margin: 0 auto
  display: grid 
  grid-template-columns: 3fr 1fr
  grid-gap: 40px
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Helmet siteTitle={data.site.siteMetadata.title} 
        meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description 
        }, 
          { name: 'keywords', content: 'sample, something'}, 
          ]}>
      </Helmet>
      <MainLayout>
        <div>
          {children}
        </div>
        <Archive/>
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
