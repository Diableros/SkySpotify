import styled from 'styled-components'
import svgLoader from '@/img/roundLoader.svg'

const LoaderStyled = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  color: #9a48f1;
`

const LoaderSvg = styled.img`
  width: 100%;
  height: 100%;
`

const LoaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
`

const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderSvg src={svgLoader} alt="loader" />
      <LoaderText>Загрузка...</LoaderText>
    </LoaderStyled>
  )
}

export default Loader
