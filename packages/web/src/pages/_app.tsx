import { AppProps } from "next/app";

import "../tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
