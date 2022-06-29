import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
	font-family: 'Nunito', sans-serif;
}

* {
    margin: 0px;
}

p {
	margin: 0px;
    font-weight: 600;
	font-size: 14px;
}

h1 {
	margin: 0px;
}

h2 {
	margin: 0px;
}

h3 {
	margin: 0px;
	font-weight: 700;
	font-size: 16px;
	color: #011627;
	line-height: 20px;
}

h4 {
	margin: 0px;
	font-weight: 600;
	font-size: 14px;
	// line-height: 28px;
	color: #707991;
}
h5 {
	margin: 0px;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	color: #707991;
}
`;

export default GlobalStyle;
