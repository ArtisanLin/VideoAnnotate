/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

/**
 * 自定义 React 钩子，用于在组件首次挂载时执行特定操作。
 * - 使用 useRef 来跟踪组件是否已挂载。
 * - 在组件首次渲染时调用传入的 mount 函数。
 * - 如果运行在服务器端或组件已挂载，则不执行 mount 函数。
 *
 * @param {() => void} mount - 首次挂载时需要执行的函数。
 */
export const useMount = (mount: () => void) => {
	const hasMountedRef = useRef(false);
	useEffect(() => {
		if (hasMountedRef.current) return;
		hasMountedRef.current = true;
		mount();
	}, []);
};
