
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
    'index.csr.html': {size: 521, hash: 'eedee491409107047fdffb4fd4501620c7b435201f003240552c200fe8bd988c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'ddca1d3d23493b867e3e090eda09498564d8abcc939157deedac9224cbc7ae85', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1784, hash: '630033386d66cd2e6582b2f96024ee1bd2edc3de29d16551fa64e99dd14b6efa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'listing-creation/index.html': {size: 2898, hash: '7b6c0b1795a6bc29f388adfbf56fffcc4ef9b7c4dfbdd42b5047c1734a7e585e', text: () => import('./assets-chunks/listing-creation_index_html.mjs').then(m => m.default)},
    'listings/index.html': {size: 4517, hash: 'be2c8bee4ff10647954428516bb6dc957242e192706730b52ebd69364a16bc84', text: () => import('./assets-chunks/listings_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
