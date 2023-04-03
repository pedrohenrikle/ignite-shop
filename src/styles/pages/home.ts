import { styled } from '..'
import Link from 'next/link'

export const HomeContainer = styled('main', {
  display: 'flex',
  // conflito com keen-slide ->  gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
  overflow: 'hidden',
  marginTop: '-5rem',
})

export const Product = styled(Link, {
  borderRadius: '0.8rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  overflow: 'hidden',
  userSelect: 'none',

  color: '#FFF',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.4rem',
    left: '0.4rem',
    right: '0.4rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    },

    strong: {
      fontSize: '$md',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      color: '$green300',
      fontWeight: 'bold',
    },
  },

  '&:hover': {
    footer: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
})
