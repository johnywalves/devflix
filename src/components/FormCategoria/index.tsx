import styled from 'styled-components'

export const BoxForm = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Listagem = styled.ul`
  margin-left: 3rem;
  list-style-type: none;
  font-size: 1.75rem;

  li {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  span {
    font-size: 2.5rem;
    font-weight: 700;
    margin-right: 1rem;
  }

  @media (max-width: 800px) {
    margin-left: 0;
  }
`

type ColorProps = {
  cor: string
}

export const Color = styled.div`
  display: block;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  border: 1px var(--white) solid;
  background-color: ${({ cor }: ColorProps) => cor};
  margin: auto 1.5rem auto 0;
`
