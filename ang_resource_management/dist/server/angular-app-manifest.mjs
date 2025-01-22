
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/listings",
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
    "renderMode": 2,
    "route": "/listing-creation"
  }
],
  assets: {
    'index.csr.html': {size: 521, hash: '858be59bace3423f1c18ed8e6e16e473bc7d3105e6c4053e9d77606a8c833c2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'dbe0577bd8e2c52053c3a93684f35318a0dd6cc49c13c052ff0d2fd8ebd39551', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'listing-creation/index.html': {size: 2854, hash: '2768abd5d340c5a55fb117c9a38360c7e7f7119f0aebb57b865ae97426afe292', text: () => import('./assets-chunks/listing-creation_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
