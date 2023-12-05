import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { AppBar } from '../AppBar/AppBar'
import { Container } from './SharedLayoutStyled'
import { Button } from '../Button/Button'

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Button>Subscribe</Button>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  )
}
