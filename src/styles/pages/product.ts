import { keyframes } from "@stitches/react";
import { styled } from "..";

const skeletonLoadingLeft = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
    backgroundColor: '$gray900'
  },
  '100%': {
    transform: 'translateX(0%)',
    backgroundColor: '$skeletongray200'
  }
})

const skeletonLoadingRight = keyframes({
  '0%': {
    transform: 'translateX(+100%)',
    opacity: 0
  },
  '100%': {
    transform: 'translateX(0%)',
    opacity: 1
  }
})

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ImageSkeleton = styled('div', {
  width: 576,
  height: 656,
  background: '$skeletongray200',
  animation: `${skeletonLoadingLeft} 2000ms ease-in-out`,
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    margintTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },
  
  p: {
    marginTop: '2.5rem',
    lineHeight: 1.6,
    fontSize: '$md',
    color: '$gray300',
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

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    }
  }
})

export const ProductDetailsSkeleton = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  animation: `${skeletonLoadingRight} 2000ms ease-in-out`,
  
  h1: {
    marginTop: '0.5rem',
    width: '30rem',
    height: '2rem',
    backgroundColor: '$skeletongray200',
    marginBottom: '0.5rem',

  },

  span: {
    display: 'block',
    height: '3rem',
    width: '7rem',
    backgroundColor: '$skeletongray200'
  },

  div: {
    marginTop: 'auto',
    width: '100%',
    height: '4rem',
    backgroundColor: '$skeletongray200',
    border: 0,
    borderRadius: 8,
  }
})
