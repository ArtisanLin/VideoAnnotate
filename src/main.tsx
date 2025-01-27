import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./pages/layout";

import "../public/style/modern-normalize.css";
import "xgplayer/dist/xgplayer.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RootLayout></RootLayout>
	</React.StrictMode>
);
