import { createGlobalStyle, css } from 'styled-components'
import { darkTheme } from '@/theme'

const GlobalStyle = createGlobalStyle`

	@font-face {
		font-family: 'Stratos';
		src: url(../../assets/Stratos-Regular.woff2) format(woff2);
	}

	html {
  	font-size: 16px;
	}

	body {
		background-color: ${darkTheme.color.bgMain};
		font-family: 'Stratos';
	}

	#root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-height: 100vh;
		min-height: 900px;
	}
`
export const scrollBarStyles = css`
  &::-webkit-scrollbar {
    width: 4px;
    background: ${({ theme }) => theme.color.bgDropListSlider};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.textMain};
    cursor: pointer;
  }
`

export default GlobalStyle
