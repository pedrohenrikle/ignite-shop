import { styled } from '..'

export const CartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray800',
  minHeight: '100vh',
  zIndex: 1,
  top: 0,
  right: 0,
  position: 'fixed',
  boxShadow: '-1px 0px 10px 1px #222',
  width: '480px',
  transition: '0.5s',
  paddingBottom: '3rem',

  header: {
    display: 'flex',
    justifyContent: 'end',
    padding: '1.5rem',

    '&:hover': {
      cursor: 'pointer',
      filter: 'brightness(1.4)',
    },
  },

  strong: {
    fontSize: '$lg',
    color: '$gray100',
    margin: '1rem 3rem 0',
  },

  variants: {
    visibility: {
      show: {
        transform: 'translateX(0%)',
      },
      hide: {
        transform: 'translateX(110%)',
      },
    },
  },
})

export const CartList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 3rem',
  gap: '1.5rem',
  marginTop: '2rem',
})

export const CartItemContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '6.375rem 1fr',
  height: '5.75rem',
})

export const CartItemImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
})

export const CartItemDescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingLeft: '0.75rem',

  header: {
    padding: '0.5rem 0 0 0',
    display: 'flex',
    justifyContent: 'start',
    fontSize: '$md',

    '&:hover': {
      cursor: 'default',
      filter: 'none',
    },
  },

  p: {
    fontWeight: 'bold',
    fontSize: '$md',
  },

  footer: {
    color: '$green500',

    span: {
      '&:hover': {
        cursor: 'pointer',
        filter: 'brightness(1.4)',
      },
    },
  },
})

export const CartSummary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 3rem',
  marginTop: 'auto',

  header: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  },

  section: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',

    span: {
      fontSize: '$md',
      fontWeight: 'bold',
    },

    strong: {
      margin: 0,
      fontSize: '$xl',
      fontWeight: 'bold',
    },
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
