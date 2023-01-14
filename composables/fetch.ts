import { FetchOptions } from "ohmyfetch";

export const fetch = async <DataT = any>(url: string, options: FetchOptions = {} as FetchOptions) => {
	const runtimeConfig = useRuntimeConfig()
	const serverRoute: string = runtimeConfig.public.baseUrl;
	const localeUrl: string = runtimeConfig.public.localeUrl;
	const apiRoute: string = runtimeConfig.public.useProxy ? `${localeUrl}/api` : `${serverRoute}/api`;

	const headers: HeadersInit = {
		Accept: "application/json",
		...options?.headers
	}

	const now = new Date();
	const offset = now.getTimezoneOffset();

	const opts: FetchOptions = options ? (({ headers, ...opts }) => opts)(options) : null;

	const baseURL = !options?.baseURL ? apiRoute : options.baseURL;

	return await $fetch(baseURL  + url, {
		baseURL: baseURL,
		credentials: "include",
		headers,
		...opts
	}) as DataT;
};