import { registerApplication, start } from 'single-spa'

registerApplication(
    'vue',
    () => import('./components/vue/index.js'),
    () => location.pathname === '/vue' || location.pathname === '/' ? true : false
)

registerApplication(
    'react',
    () => import('./components/react/index.js'),
    () => location.pathname === '/react' || location.pathname === '/' ? true : false
)
registerApplication(
    'vanilla',
    () => import('./components/vanilla/index.js'),
    () => location.pathname === '/vanilla' || location.pathname === '/' ? true : false
)
start()
