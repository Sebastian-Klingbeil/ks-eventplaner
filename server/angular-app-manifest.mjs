
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ks-eventplaner/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/ks-eventplaner/start",
    "route": "/ks-eventplaner"
  },
  {
    "renderMode": 2,
    "route": "/ks-eventplaner/start"
  },
  {
    "renderMode": 2,
    "route": "/ks-eventplaner/tour"
  },
  {
    "renderMode": 2,
    "route": "/ks-eventplaner/event"
  },
  {
    "renderMode": 2,
    "route": "/ks-eventplaner/impressum"
  },
  {
    "renderMode": 2,
    "route": "/ks-eventplaner/privacy-policy"
  },
  {
    "renderMode": 2,
    "redirectTo": "/ks-eventplaner/start",
    "route": "/ks-eventplaner/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 726, hash: 'f5faa284e94043f4e198ce260d5137f123a6e1c72a2a2adb7b5baa4149fe708e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '8f01cafd954d0ff4d00c136897b6213ce87652059a1519579556626abec4022f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'tour/index.html': {size: 4957, hash: 'bfcf10e2c64756f3f22fc46f9ec3dc373f4dd5bad2975b5b65aef789f6da6462', text: () => import('./assets-chunks/tour_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 9569, hash: '6b15d3864e66d32d701e60339560910f145d93f58eef7cfa71bf496e41ce2f4a', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'event/index.html': {size: 4961, hash: 'a9323dbf70e8b3794a0d8cc612ba1131f19f49433e99dd968e0d351f9a9c1eed', text: () => import('./assets-chunks/event_index_html.mjs').then(m => m.default)},
    'start/index.html': {size: 15245, hash: '208b5a58a4469ae51f76c5fd07c99bd323d9dc081be3461d1b9fac7589b00e68', text: () => import('./assets-chunks/start_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 8027, hash: 'd0b7df24e398e2c97136a8f22a958104524fe3a1e7a3e7dc232b015a490bf287', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'styles-UI5I2EY6.css': {size: 88, hash: 'XXKmAFRiwP0', text: () => import('./assets-chunks/styles-UI5I2EY6_css.mjs').then(m => m.default)}
  },
};
