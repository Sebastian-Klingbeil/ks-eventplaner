
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/start",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/start"
  },
  {
    "renderMode": 2,
    "route": "/tour"
  },
  {
    "renderMode": 2,
    "route": "/event"
  },
  {
    "renderMode": 2,
    "route": "/impressum"
  },
  {
    "renderMode": 2,
    "route": "/privacy-policy"
  },
  {
    "renderMode": 2,
    "redirectTo": "/start",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 711, hash: '239e2a707da78f55db78f0c36f68e253fa1e5a28942416d46f666c93cbec4863', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'd9edfe73c34899f94e51f456d5646259d2061c39450b388378076798c42bf660', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'tour/index.html': {size: 4912, hash: '0d126d1e5d288793b14c09d9a55554d5fd331d4047d7082f3baced59b0328a6b', text: () => import('./assets-chunks/tour_index_html.mjs').then(m => m.default)},
    'start/index.html': {size: 15170, hash: '61d14dfa5e462b9faf3ce6b31c6e3f14a83a70b447c53ff6d97a111cc04e96f8', text: () => import('./assets-chunks/start_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 9524, hash: '4ebae166ed9d83e1878d03ee88956451721d0ac5fef31a0713f158d42774fd8d', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'event/index.html': {size: 4916, hash: '1798512c7ce14bb6ba86732c977f634512123a29959939492330f95f2280e6ff', text: () => import('./assets-chunks/event_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 7982, hash: '098a57d57e5d9ca7c4a63cdc899ef03f6762627a9a75a93b04e59dcc79b76911', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'styles-UI5I2EY6.css': {size: 88, hash: 'XXKmAFRiwP0', text: () => import('./assets-chunks/styles-UI5I2EY6_css.mjs').then(m => m.default)}
  },
};
