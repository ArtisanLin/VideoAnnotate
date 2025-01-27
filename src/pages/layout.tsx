import { FCC } from "src/types";
import MainProvider from "./Provider";
import { Home } from ".";
import { Header } from "./components/Header";

const RootLayout: FCC = ({ children }) => {
	return (
		<div className="root-layout" style={{ width: "100%", height: "100%" }}>
			<MainProvider>
				{children}
				<Header></Header>
				<Home></Home>
			</MainProvider>
		</div>
	);
};

export default RootLayout;
