import styled from 'styled-components'

export const BoxForm = styled.div`
  display: grid;
  grid-template-columns: 30% 68%;
  grid-column-gap: 2%;

  @media (max-width: 1400px) {
    grid-template-columns: 48% 50%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-column-gap: 0;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  button {
    border: none;
    border-radius: 0.5rem;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 1.25rem 2rem;
    margin: 1rem 0;
    background-color: var(--primary);
    color: #ffffff;
    transition: opacity 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  @media (max-width: 800px) {
    button {
      margin-bottom: 3rem;
    }
  }
`

export const Listagem = styled.ul`
  margin-left: 3rem;
  list-style-type: none;
  font-size: 1.75rem;

  span {
    font-size: 2.5rem;
    font-weight: 700;
    margin-right: 1rem;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }
`

export const ListagemItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 2.5rem;
  margin-bottom: 0.5rem;
`

export const ListagemLinha = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  min-height: 2.5rem;
`

export const ListagemComandos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding-left: 3.5rem;
  min-height: 2.5rem;
  margin: 0.5rem 0;
`

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

type ColorProps = {
  cor: string
}

export const Color = styled.div`
  display: table;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${({ cor }: ColorProps) => cor};
  margin: auto 1.5rem auto 0;
`

export const ButtonRemove = styled.div`
  color: var(--black);
  height: 1.5rem;
  width: 1.5rem;
  opacity: 0.75;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
