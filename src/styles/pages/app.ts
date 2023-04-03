import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  marginTop: '-1rem',
})

export const Header = styled('div', {
  display: 'flex',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  borderRadius: 6,
  background: '$gray800',
  color: '$gray100',
  border: 'none',
  cursor: 'pointer',
})
