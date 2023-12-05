import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navigate = styled.nav`
  display: flex;
`

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  /* gap: 20px; */
  padding: 8px 12px;

  &.active {
    border-bottom: 4px solid;
    border-color: orange;
  }
`
