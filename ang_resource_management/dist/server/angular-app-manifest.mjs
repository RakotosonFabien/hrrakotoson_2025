
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/listings"
  },
  {
    "renderMode": 2,
    "route": "/listing-creation"
  }
],
  assets: {
    'index.csr.html': {size: 521, hash: '639fd9dc74dd78dd71126e1e1d00d4defee613f44fae60c69ff9e72495e97024', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'eb29e74745f466ad8cad183f85cd4676cd06061eaa336a87dbf4a15206278434', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1784, hash: 'cb48ed5dfaf90950137e1a742eb4a7d1314ba96cb5b44645c4e8802af8b093f7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'listing-creation/index.html': {size: 2898, hash: '3ed5ad746781cc92353c46e966353d27ee2897cbeff5b1eb4e8b3a248c48307a', text: () => import('./assets-chunks/listing-creation_index_html.mjs').then(m => m.default)},
    'listings/index.html': {size: 4059, hash: '08541f5db2d94f93be7ff4cdaf20d6054dd56166eb92d901ccbf4d0f825d55c5', text: () => import('./assets-chunks/listings_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
