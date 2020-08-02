import styled, { css } from 'styled-components'

type LoadingBoxProps = {
  center?: boolean
}

export const LoadingBox = styled.section`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background) !important;

  ${({ center }: LoadingBoxProps) =>
    center &&
    css`
      height: calc(100% - var(--bodyPaddingTop));
    `}
`

export const LoadingSpin = styled.div`
  border: 2rem solid var(--backgroundInput);
  border-left-color: var(--primary);
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`
