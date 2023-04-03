import {
  CartItemContainer,
  CartItemDescriptionContainer,
  CartItemImageContainer,
} from '../../styles/components/cart'
import Image from 'next/future/image'
import { priceFormat } from '../../lib/utils'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CartItem(props) {
  const { rmItem } = useContext(CartContext)

  function handleRemoveClick() {
    rmItem(props.item.key)
  }

  return (
    <CartItemContainer>
      <CartItemImageContainer>
        <Image src={props.item.imageUrl} width="102" height="92" alt="" />
      </CartItemImageContainer>

      <CartItemDescriptionContainer>
        <header>{props.item.name}</header>
        <p>{priceFormat(props.item.price)}</p>
        <footer>
          <span onClick={handleRemoveClick}>Remover</span>
        </footer>
      </CartItemDescriptionContainer>
    </CartItemContainer>
  )
}
