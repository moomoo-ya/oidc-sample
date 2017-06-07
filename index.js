'use strict';

const Provider = require('oidc-provider');
const issuer = 'http://localhost:3030';
const config = {
};

// この部分をDBから取得して認証認可を行う
const clients = [
  {
    client_id: '0',
    client_secret: '0',
    scope: 'openid email',
    redirect_uris: [
      'http://localhost:3000/auth/cb'
    ]
  }
];

const oidc = new Provider(issuer, config);
oidc.initialize({ clients }).then(() => {
  console.log(oidc.callback);
  console.log(oidc.app);
  oidc.app.listen(3030);
});

