import styled from 'styled-components'

export const VolumeBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2.25rem;
  gap: 17px;
`

export const Slider = styled.input`
  &[type='range'] {
    width: 109px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;

    height: 2px;
  }

  &[type='range']::-webkit-slider-runnable-track {
    height: 2px;
    background-color: ${({ theme }) => theme.bgDropListSlider};
    overflow-clip-margin: hidden;
  }

  &[type='range']::-webkit-slider-thumb {
    position: relative;
    background: ${({ theme }) => theme.bgMain};
    cursor: pointer;
    width: 12px;
    min-height: 12px;
    border: 2px solid ${({ theme }) => theme.textMain};
    border-radius: 50%;
    -webkit-appearance: none;
    margin-top: -5px;

    // box-shadow: -1px 0 0 1px #fff;
    &::before {
      position: absolute;
      content: '';
      height: 5px;
      width: 50px;
      background-color: ${({ theme }) => theme.textMain};
    }
  }
`
