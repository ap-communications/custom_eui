declare module '@elastic/eui/optimize/lib/test/required_props' {
	export const requiredProps: {
	    'aria-label': string;
	    className: string;
	    'data-test-subj': string;
	};

}
declare module '@elastic/eui/optimize/lib/test/take_mounted_snapshot' {
	import { ReactWrapper } from 'enzyme';
	import { Component } from 'react';
	interface TakeMountedSnapshotOptions {
	    hasArrayOutput?: boolean;
	}
	/**
	 * Use this function to generate a Jest snapshot of components that have been fully rendered
	 * using Enzyme's `mount` method. Typically, a mounted component will result in a snapshot
	 * containing both React components and HTML elements. This function removes the React components,
	 * leaving only HTML elements in the snapshot.
	 */
	export const takeMountedSnapshot: (mountedComponent: ReactWrapper<any, {}, Component>, options?: TakeMountedSnapshotOptions) => ChildNode | ChildNode[];
	export {};

}
declare module '@elastic/eui/optimize/lib/test/find_test_subject' {
	import { ReactWrapper, ShallowWrapper } from 'enzyme'; const MATCHERS: readonly ["=", "~=", "|=", "^=", "$=", "*="]; type FindTestSubject<T extends ShallowWrapper | ReactWrapper> = (mountedComponent: T, testSubjectSelector: string, matcher?: typeof MATCHERS[number]) => ReturnType<T['find']>;
	export const findTestSubject: FindTestSubject<ShallowWrapper<any> | ReactWrapper<any>>;
	export {};

}
declare module '@elastic/eui/optimize/lib/test/react_warnings' {
	export const startThrowingReactWarnings: () => void;
	export const stopThrowingReactWarnings: () => void;

}
declare module '@elastic/eui/optimize/lib/test/sleep' {
	export function sleep(ms?: number): Promise<unknown>;

}
declare module '@elastic/eui/optimize/lib/test/is_jest' {
	export const IS_JEST_ENVIRONMENT: boolean;

}
declare module '@elastic/eui/optimize/lib/test' {
	export { requiredProps } from '@elastic/eui/optimize/lib/test/required_props';
	export { takeMountedSnapshot } from '@elastic/eui/optimize/lib/test/take_mounted_snapshot';
	export { findTestSubject } from '@elastic/eui/optimize/lib/test/find_test_subject';
	export { startThrowingReactWarnings, stopThrowingReactWarnings, } from '@elastic/eui/optimize/lib/test/react_warnings';
	export { sleep } from '@elastic/eui/optimize/lib/test/sleep';
	export { IS_JEST_ENVIRONMENT } from '@elastic/eui/optimize/lib/test/is_jest';

}
