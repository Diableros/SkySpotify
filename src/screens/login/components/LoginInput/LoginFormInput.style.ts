import styled from 'styled-components'

export const FormInputWrapper = styled.div`
  position: relative;
`

export const FormInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #d0cece;
  padding: 8px 0;

  &::placeholder {
    color: #e1e1e1;
  }
`

export const FormInputError = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  left: 0;
  top: 42px;
  color: ${({ theme }) => theme.color.textError};
  font-size: 0.8rem;
  font-weight: 400;
`
