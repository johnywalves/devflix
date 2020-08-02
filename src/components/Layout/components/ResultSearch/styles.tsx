import styled from 'styled-components'

type ContainerProps = {
  showContainer: boolean
}

export const Container = styled.div`
  background: var(--background);
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: var(--bodyPaddingTop);
  left: 0;
  width: 100%;
  box-shadow: 0 5px 4px var(--shadowColor);
  z-index: 100;
  transition: height 1s;
  height: ${({ showContainer }: ContainerProps) =>
    showContainer ? 'calc(100vh - var(--bodyPaddingTop))' : '0'};

  @media (max-width: 800px) {
    height: ${({ showContainer }: ContainerProps) =>
      showContainer ? 'calc(100vh - var(--bodyPaddingTop))' : '0'};
  }
`

export const Listagem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const NotFound = styled.p`
  color: var(--black);
  text-align: center;
  font-size: 2rem;
  margin-top: 3rem;
`
