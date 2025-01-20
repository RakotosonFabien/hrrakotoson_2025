
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/listings"
  },
  {
    "renderMode": 1,
    "route": "/listings/*"
  },
  {
    "renderMode": 1,
    "route": "/listing-modif/*"
  },
  {
    "renderMode": 1,
    "route": "/listing-creation"
  }
],
  assets: {
    'index.csr.html': {size: 521, hash: 'f61a859463e9f688edff7a97e3bad0df94afffea93f68bfecaff9a5c487da3a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'ce2ffa84f048fe92ddc03287fdfefed726933b58eba52e1b71fe18c4baa4efa0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
