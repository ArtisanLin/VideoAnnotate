import { createContextWithProvider } from "src/hooks/createContext";

const {
	createUseContext,
	useParentContext,
	Provider: MainProvider,
} = createContextWithProvider(() => {});

export const useMain = createUseContext();
export const useParentComponentHistory = useParentContext;

export default MainProvider;
