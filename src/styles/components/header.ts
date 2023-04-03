import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '2rem 0.5rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '$gray800',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  width: '3rem',
  height: '3rem',

  variants: {
    visibility: {
      show: {
        display: 'block',
      },
      hide: {
        display: 'none',
      },
    },
  },

  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(1.4)',
  },
})

export const CartButtonCount = styled('div', {
  backgroundColor: '$green500',
  color: '$white',
  borderRadius: '50%',
  fontSize: '0.875rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1.5em',
  height: '1.5em',
  position: 'absolute',
  transform: 'translateX(2rem) translateY(-1.25rem)',
})
