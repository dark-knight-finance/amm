import React from 'react'
import styled from 'styled-components'
import { Text, Button, HelpIcon, Link } from '@pancakeswap-libs/uikit'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 240px;
  }
`

const VersionBar = () => {
  return (
    <Wrapper>
      <Text bold mr="16px">
        You are using KnightSwap AMM exchange.
      </Text>
     
    </Wrapper>
  )
}

export default VersionBar
