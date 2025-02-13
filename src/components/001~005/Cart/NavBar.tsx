
interface Props{
    cartItemsCount: number
}
const NavBar = ({cartItemsCount}:Props) => {
  return (
    <div>cartItemsCount: {cartItemsCount}</div>
  )
}

export default NavBar