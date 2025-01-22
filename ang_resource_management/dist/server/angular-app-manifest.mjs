
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
    'index.csr.html': {size: 521, hash: '58dd884dbbbc48c0b1958b5b283947ca961b52708798173075c2f727b6033db6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '06d60b7f2c0526ae2b4ddd806a9bb2799f855581f224860415a3f53de2a3d39b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1690, hash: 'e702e20bc3b3b532b04107876c410f936346d7a2c36542c803731ffd847346a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'listing-creation/index.html': {size: 2854, hash: '2893453a9a93e95bf28014e045973326021ae9fc0859ac3af7797be1c5202d5a', text: () => import('./assets-chunks/listing-creation_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
