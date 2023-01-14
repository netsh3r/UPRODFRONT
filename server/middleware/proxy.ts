import type { IncomingMessage, ServerResponse } from 'http'
import { createProxyMiddleware, debugProxyErrorsPlugin, loggerPlugin, proxyEventsPlugin, errorResponsePlugin } from 'http-proxy-middleware';

const runtimeConfig = useRuntimeConfig()

const apiProxyMiddleware = createProxyMiddleware({
    target: runtimeConfig.public.baseUrl,
    changeOrigin: true,
    pathFilter: '/api',
    logger: console,
    ejectPlugins: true,
    plugins: [debugProxyErrorsPlugin, loggerPlugin, errorResponsePlugin, proxyEventsPlugin],
    preserveHeaderKeyCase: false,
})

export default defineEventHandler(async (event) => {
    await new Promise((resolve, reject) => {
        const next = (err?: unknown) => {
            if (err) {
                reject(err)
            } else {
                resolve(true)
            }
        }

        apiProxyMiddleware(event.req, event.res, next)
    })
})