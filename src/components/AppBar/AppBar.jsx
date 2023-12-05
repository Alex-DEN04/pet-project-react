import { Navigate, Wrap, Link } from './AppBarStyled'

export const AppBar = () => {
  return (
    <Wrap>
      <p>logo</p>
      <Navigate>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/team">Team</Link>
      </Navigate>
    </Wrap>
  )
}
