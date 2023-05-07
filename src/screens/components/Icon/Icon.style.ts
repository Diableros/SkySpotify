import styled, { css } from 'styled-components'

type PropsType = {
  size?: string
  width?: string
  height?: string
  roundCrop?: boolean
  inActive?: boolean
  color?: string
}

const activeCss = css`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.hover};
  }
  &:active {
    color: ${({ theme }) => theme.color.active};
  }
`

export const IconWrapper = styled.div<PropsType>`
  display: block;
  ${({ size }) =>
    size
      ? `
  width: ${size};
  height: ${size};
  `
      : null}

  ${({ width }) => (width ? `width: ${width}` : null)};
  ${({ height }) => (height ? `height: ${height}` : null)};
  ${({ roundCrop }) => (roundCrop ? `border-radius: 50%;` : null)}
  overflow: hidden;

  color: ${({ color }) => (!color ? `inherit` : color)};

  ${({ inActive }) => (!inActive ? activeCss : null)};

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export default IconWrapper
