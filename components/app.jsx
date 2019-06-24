import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../database/data'

import {createGlobalStyle} from 'styled-components'
import {TypographyStyle} from 'react-typography'
import typography from '../utils/typography'

const GlobalStyle = createGlobalStyle`
  body, html, #__next {
    height: 100%;
    margin: 0;
  }
`

const App = props => {
  const {children} = props

  return (
    <>
      <Helmet
        titleTemplate={`%s · ${config.name}`}
        htmlAttributes={{lang: 'en'}}
        meta={[
          {
            content: `${config.name}`,
            name: 'name',
          },
          {
            content: `${config.desc}`,
            name: 'description',
          },
          {
            content: '#212121',
            name: 'theme-color',
          },
        ]}
        link={[
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400&font-display=swap',
          },
          {
            rel: 'shortcut icon',
            href: '/static/favicon.png',
          },
          {
            rel: 'apple-touch-icon-precomposed',
            href: '/static/favicon.png',
          },
          {
            rel: 'preconnect',
            href: 'https://rayriffy.com',
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://rayriffy.com',
          },
          {
            rel: 'dns-prefetch',
            href: 'https://fonts.googleapis.com',
          },
        ]}
      />
      <GlobalStyle />
      <TypographyStyle typography={typography} />
      {children}
    </>
  )
}

export default App

App.propTypes = {
  children: PropTypes.node,
}
