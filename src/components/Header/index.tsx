import {
  CartButton,
  CartButtonCount,
  HeaderContainer,
} from '../../styles/components/header'
import { ShoppingBag } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import Image from 'next/future/image'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { items, cartShow, toggleCart } = useContext(CartContext)

  function handleCartButtonClick() {
    toggleCart()
  }

  const visibility = !cartShow ? 'show' : 'hide'

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <CartButton visibility={visibility} onClick={handleCartButtonClick}>
        {items.length > 0 && <CartButtonCount>{items.length}</CartButtonCount>}
        <ShoppingBag size="24" color="#F5F5F5"></ShoppingBag>
      </CartButton>
    </HeaderContainer>
  )
}
