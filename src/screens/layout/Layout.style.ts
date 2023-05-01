import styled from 'styled-components'

export const LayoutTop = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  color: ${({ theme }) => theme.color.textMain};
  background-color: ${({ theme }) => theme.color.bgMain};
`

export const LayoutMiddle = styled.section`
  display: flex;
  min-width: 600px;
  width: 100%;
  max-height: 100vh;
  flex-direction: column;
`

export const LayoutRight = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem 140px 1rem;
`
