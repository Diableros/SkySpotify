import styled from 'styled-components'
import { scrollBarStyles } from '@/global_style/globalStyles'

export const TrackList = styled.ul`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem 0 0.5rem;
  flex-shrink: 1;

  ${scrollBarStyles}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.color.textSecondry};
  min-height: 40px;
  text-transform: uppercase;
  padding: 0 1rem;
`

export const Row = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 0.5rem 0;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 2%);
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: calc(73px + 0.75rem);
  }
`
export const Col1 = styled.div`
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 3;
`

export const Col2 = styled.div`
  flex: 2;
`

export const Col3 = styled.div`
  flex: 1.7;
  color: ${({ theme }) => theme.color.textSecondry};
`

export const Col4 = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex: 0.5;
  color: ${({ theme }) => theme.color.textSecondry};
  padding-right: 0.75rem;
`

export const Like = styled.div`
  color: ${({ theme }) => theme.color.textSecondry};
`

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 3rem;
`

export const ErrorMessage = styled.p`
  color: #dd4422;
  font-size: 2rem;
`

export const PageTitle = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 50px 1rem 40px 1rem;
  gap: 45px;
  flex: none;
  font-size: 4rem;
`
