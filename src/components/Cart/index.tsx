import axios from 'axios'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { priceFormat } from '../../lib/utils'
import {
  CartContainer,
  CartList,
  CartSummary,
} from '../../styles/components/cart'
import { CartItem } from './cart_item'

export function Cart() {
  const { cartShow, toggleCart, items } = useContext(CartContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceIds: items.map((item) => item.defaultPriceId),
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  function handleCloseButtonClick() {
    toggleCart()
  }

  const visibility = cartShow ? 'show' : 'hide'

  const total = items
    .map((item) => parseInt(item.price))
    .reduce((soma, valor) => soma + valor, 0)

  return (
    <CartContainer visibility={visibility}>
      <header>
        <X size="24" color="#c4c4cc" onClick={handleCloseButtonClick}></X>
      </header>

      <strong>Sacola de compras</strong>

      <CartList>
        {items.length > 0
          ? items.map((item) => {
              return <CartItem key={item.key} item={item} />
            })
          : 'Sacola vazia'}
      </CartList>

      <CartSummary>
        <header>
          <span>Quantidade</span>
          <span>{items.length} itens</span>
        </header>

        <section>
          <span>Valor total</span>
          <strong>{priceFormat(total)}</strong>
        </section>

        <button
          disabled={isCreatingCheckoutSession || items.length === 0}
          onClick={handleBuyButton}
        >
          Fazer Pedido
        </button>
      </CartSummary>
    </CartContainer>
  )
}
