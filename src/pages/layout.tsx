import { FCC } from "src/types";
import MainProvider from "./Provider";
import { Home } from ".";

const RootLayout: FCC = ({ children }) => {
	return (
		<MainProvider>
			{children}
			<Home></Home>
		</MainProvider>
	);
};

export default RootLayout;
