import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Global } from '@emotion/react';

import { AppBar } from '../AppBar/AppBar';
import { Container } from './SharedLayoutStyled';
import { Button } from '../Button/Button';

export const SharedLayout = () => {
  console.log(Global)
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
