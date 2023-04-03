import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

import { CartContextProvider } from '../contexts/CartContext'
import { Cart } from '../components/cart'
import { Header } from '../components/header'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />

        <Cart />

        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}

export default App
