import { ReactNode } from 'react'
import StructuralHeader from '../../components/structural/header/Header'

interface Props {
  children?: ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <StructuralHeader />

      <main className="container">{children}</main>
    </>
  )
}

export default Layout
