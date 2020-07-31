import styled from 'styled-components'

type VideoCardContainerProps = {
  url: string
}

export const VideoCardContainer = styled.a`
  overflow: visible;
  cursor: pointer;
  color: white;
  flex: 0 0 384px;
  width: 384px;
  height: 163px;
  background-image: ${({ url }: VideoCardContainerProps) => `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  transition: all 0.3s ease-in-out;
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
