import styled, { css } from 'styled-components'

type VideoCardContainerProps = {
  index?: number
  $url: string
  $preview?: boolean
}

export const VideoCardContainer = styled.a<VideoCardContainerProps>`
  overflow: visible;
  cursor: pointer;
  color: white;
  flex: 0 0 384px;
  width: 384px;
  height: 215px;
  background-image: ${({ $url }) => `url(${$url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 1px 1px 4px var(--shadowColor);
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  transition: all 0.3s ease-in-out;
  margin: 32px 4px;
  z-index: 1;

  &.highlight {
    transform: scale(0);
  }

  &:hover,
  &:focus {
    transform: scale(1.3);
    box-shadow: 0 4px 16px var(--shadowColor);
    z-index: 5;
  }

  ${({ $preview }: VideoCardContainerProps) => {
    return $preview
      ? css`
          margin: 24px 4px;
        `
      : css`
          &:not(:first-child) {
            margin-left: 20px;
          }
        `
  }}
`
