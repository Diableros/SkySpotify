import { createGlobalStyle } from 'styled-components'
import { darkTheme } from '@/theme'

const GlobalStyle = createGlobalStyle`

	@font-face {
		font-family: 'Stratos';
		src: url(../../assets/Stratos-Regular.woff2) format(woff2);
	}

	html {
  	font: ;-size: 16px;
	}

	body {
		background-color: ${darkTheme.bgMain};
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
export const scrollBarStyles = `
	&::-webkit-scrollbar {
		width: 4px;
		background: var(--scrollbar-bg-color);
		border-radius: 2px;
	}

	&::-webkit-scrollbar-thumb {
		width: 4px;
		border-radius: 2px;
		background: #ffffff;
	}

`

export default GlobalStyle
