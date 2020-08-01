import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--background);

  @media (max-width: 800px) {
    height: 6rem;
  }
`

export const Commands = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Astro = styled.div`
  margin-left: 2rem;
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 50%;
  z-index: 1;
  border: solid 1px var(--background);
  transition: all 0.5s cubic-bezier(0, 0.92, 0.27, 0.82);
  cursor: pointer;
  background-color: var(--background);
  box-shadow: inset 2px -2px 0px 0px #ffffff, inset 8px -8px 0px 0px #d8e8f7;

  .light & {
    background-color: #ffdb01 !important;
    box-shadow: inset -4px 0px 0px #ff8603, inset 2px 0px 0px #ffffffcc,
      inset -5px 0px 0px 2px #ffd201, 0px 0px 0px 8px #ffd20133;
  }
`

type LogoProsp = {
  viewForehead: boolean
}

export const Logo = styled.img`
  height: 3.8rem;
  transition: opacity 0.3s;
  opacity: ${({ viewForehead }: LogoProsp) => (viewForehead ? '0' : '1')};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    height: 4rem;
    margin: 1rem 0;
  }
`

export const Search = styled.input`
  color: var(--black);
  background-color: transparent;
  font-size: 1.8rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid var(--black);
  opacity: 0.5;
  padding-right: 4rem;

  &:focus {
    border-bottom-color: var(--primary);
    opacity: 1;
  }

  ${({ value }: HTMLInputElement) => {
    const hasValue = value && value.length > 0
    return (
      hasValue &&
      css`
        border-bottom-color: var(--primary);
        opacity: 1;
      `
    )
  }}
`
