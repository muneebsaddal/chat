import { createGlobalStyle } from "styled-components";
import "./_variables.scss";

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
	font-weight: var(--heading-weight);
	font-size: var(--heading-size);
    color: var(--primary-text-color);
	line-height: 20px;
}

h4 {
	margin: 0px;
	font-weight: var(--text-weight);
	font-size: var(--text-size);
    color: var(--secondary-text-color);
    // line-height: 28px;
}
h5 {
	margin: 0px;
	font-weight: var(--text-weight);
	font-size: var(--text-size);
	line-height: 24px;
    color: var(--secondary-text-color);
}
`;

export default GlobalStyle;
