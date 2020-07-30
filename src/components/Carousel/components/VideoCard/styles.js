import styled from 'styled-components'

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  transition: all 0.5s ease-in-out;
  margin: 32px 4px;
  z-index: 1;

  &:hover,
  &:focus {
    transform: scale(1.35);
    z-index: 5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`
