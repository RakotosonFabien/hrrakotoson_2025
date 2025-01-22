
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
    'index.csr.html': {size: 521, hash: 'de2da9224a911e734eda73b96256c937a3d665d92c60db17b7320f1f40e339f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '9ccf5b8e0d2aaf7568060130b3b9c317c523a4d012bc8db54f7256a8ed5b2922', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'listing-creation/index.html': {size: 2854, hash: '21abd4c78d307ceae081a0b6cde491f70eeb0f035b8b8b57d03bbe06c3e0a104', text: () => import('./assets-chunks/listing-creation_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
