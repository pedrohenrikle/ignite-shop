import * as Dialog from '@radix-ui/react-dialog'
import { Handbag, X } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import {
  ButtonCartLength,
  ButtonContainer,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalOverlay,
} from './styles'
import { EmptyCart } from './EmptyCart'
import { ContentCart } from './ContentCart'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'


export interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  priceNumber: number
  description: string
  defaultPriceId: string
}

export interface CartContextProps {
  cartItems: ProductProps[]
  addCart: (product: ProductProps) => void
  removeCart: (productId: string) => void
  checkIfAlreadyInCart: (productId: string) => boolean
  cartTotalPrice: number
}

export function Cart() {
  const { cartItems } = useContext(CartContext) as CartContextProps

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonContainer>
          <Handbag
            size={24}
            weight='bold'
            color='#8D8D99'
          />

          {cartItems.length > 0 && (
            <ButtonCartLength>
              {cartItems.length}
            </ButtonCartLength>
          )}
        </ButtonContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <Dialog.Title>
            Sacola de compras
          </Dialog.Title>
          <ModalClose asChild>
            <X size={24} color='#8D8D99' weight='bold' />
          </ModalClose>
          <ModalDescription>
            {cartItems.length >= 1
              ? <ContentCart />
              : <EmptyCart />
            }
          </ModalDescription>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}