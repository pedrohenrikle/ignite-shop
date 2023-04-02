import { AppProps } from "next/app";
import Image from 'next/image'
import { globalStyles } from "../styles/global";


import logoImg from '../assets/logo.svg'
import { CartButton, Container, Header } from "../styles/pages/app";
import { ShoppingBag } from "phosphor-react";


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt={""}/>
        <CartButton>
          <ShoppingBag size={24} weight="bold"/>
        </CartButton>
      </Header>

      <Component {...pageProps} />  
    </Container>

  )
}
