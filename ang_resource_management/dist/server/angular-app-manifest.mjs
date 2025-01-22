
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
    "route": "/listing-creation"
  }
],
  assets: {
    'index.csr.html': {size: 521, hash: 'f1bf3cc04f731a2a2553f89dd379d4bfccdd47891326ba7f071d221a25b439a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'aeaed4e5018dc382712175b292aca3e472997c39d3d1e491cf7b9a6c0ab6ab21', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
