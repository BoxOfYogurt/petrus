// import React, { useRef, useEffect } from "react";

// export const useClickOutside = <T, F>(
// 	elementRef: React.RefObject<T>,
// 	callback: () => void
// ) => {
// 	let callbackRef = useRef<F | null>(null);
// 	callbackRef.current = callback;

// 	useEffect(() => {
// 		const handleClickOutside = (e: React.MouseEvent<T>) => {
// 			if (!elementRef.current.contains(e.target) && callbackRef) {
// 				callbackRef.current(e);
// 			}
// 		};
// 		document.addEventListener("click", handleClickOutside, true);
// 		return () => {
// 			document.removeEventListener("click", handleClickOutside, true);
// 		};
// 	}, [elementRef, callbackRef]);
// };

import React, { useEffect, useRef } from "react";

export const useClickOutside = (
	elementRef: React.RefObject<any>,
	callback: (e: any) => void
) => {
	let callbackRef = useRef<any>(null);
	callbackRef.current = callback;

	useEffect(() => {
		const handleClickOutside = (e: any) => {
			if (!elementRef.current.contains(e.target) && callbackRef) {
				callbackRef.current(e);
			}
		};

		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [elementRef, callbackRef]);
};
