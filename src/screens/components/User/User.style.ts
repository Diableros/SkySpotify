import styled from 'styled-components'

export const UserBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  color: ${({ theme }) => theme.textSecondry};
`

export const UserName = styled.p`
  text-align: left;
  overflow: hidden;
  line-height: 2rem;
`
