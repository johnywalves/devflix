import styled from 'styled-components'

export const FooterBase = styled.footer`
  background: var(--background);
  color: var(--black);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  font-size: 1.5rem;

  a {
    color: var(--primary);
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`

export const Logo = styled.img`
  width: auto;
  height: 3rem;
  margin-bottom: 0.75rem;

  &:hover {
    cursor: pointer;
  }
`
