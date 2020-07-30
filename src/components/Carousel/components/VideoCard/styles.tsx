import styled from 'styled-components'

type VideoCardContainerProps = {
  url: string
}

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
  color: white;
  flex: 0 0 480px;
  width: 480px;
  height: 204px;
  background-image: ${({ url }: VideoCardContainerProps) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
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
