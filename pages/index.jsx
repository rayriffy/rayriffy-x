import React from 'react'
import Helmet from 'react-helmet'

import config from '../database/data'

import {Box, Flex, Heading, Link} from 'rebass'
import styled from 'styled-components'

import App from '../components/app'

const FullFlex = styled(Flex)`
  height: 100%;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const Page = props => {
  const navs = [
    {
      name: 'rayriffy.com',
      href: 'https://rayriffy.com',
    },
    {
      name: 'about',
      href: 'https://cv.rayriffy.com',
    },
    {
      name: 'contact',
      href: 'mailto:contact@rayriffy.com',
    },
  ]
  return (
    <App>
      <Helmet title={`Home`} />
      <FullFlex justifyContent={`center`} alignItems={`center`}>
        <Box>
          <Heading textAlign={`center`} width={1}>
            {config.name}
          </Heading>
          <Box width={1} pt={2}>
            <Flex justifyContent={`center`}>
              {navs.map(nav => (
                <NavLink href={nav.href} key={`nav-${nav.name}`} px={1} fontSize={16} color={`rgba(0, 0, 0, 0.6)`}>
                  {nav.name.toUpperCase()}
                </NavLink>
              ))}
            </Flex>
          </Box>
        </Box>
      </FullFlex>
    </App>
  )
}

export default Page
