import { createContext, useContext, useState } from "react";
import { useMount } from "./useMount";
import { FCC } from "src/types";

/**
 * 创建一个包含 Provider、上下文访问函数和父上下文访问功能的 React 上下文（Context）。
 * - 使用指定的函数和初始值创建一个新的 React Context。
 * - 定义一个 Provider 组件，该组件使用函数的返回值作为 Context 的值，并渲染其子组件。
 * - 创建一个用于访问 Context 值的自定义钩子函数。
 * - 提供一个用于访问并在需要时自动注册到父上下文中的功能。
 *
 * @template T - 上下文（Context）中的值的类型。
 * @param {(...args: any[]) => T} fn - 用于生成上下文值的函数。
 * @param {T} [initialValue] - 上下文的初始值。
 * @returns {Object} 返回包含 Context, Provider, 自定义钩子和父上下文访问功能的对象。
 */
export function createContextWithProvider<T>(
	fn: (...args: any[]) => T,
	initialValue?: T
) {
	const Context = createContext(initialValue as T);
	const Provider: FCC<any> = ({ children, ...props }) => (
		<Context.Provider value={fn.call(undefined, props)}>
			{children}
		</Context.Provider>
	);
	const createUseContext = (): (() => T) => () => useContext(Context);

	return {
		Context,
		Provider,
		createUseContext,
		useParentContext: () => {
			const [data, setData] = useState<T>(initialValue as T);
			return {
				...data,
				useAutoRegisterInParent: () => {
					const data = useContext(Context);
					useMount(() => setData(() => data));
				},
			};
		},
	};
}
