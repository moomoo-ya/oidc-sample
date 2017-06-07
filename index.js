'use strict';

const Provider = require('oidc-provider');
const issuer = 'http://localhost:3030';
const config = {
};
const clients = [
  {
    client_id: '0',
    client_secret: '0',
    scope: 'openid email',
    redirect_uris: ['http://localhost:3000']
  }
];

const oidc = new Provider(issuer, config);
oidc.initialize({ clients }).then(() => {
  console.log(oidc.callback);
  console.log(oidc.app);
  oidc.app.listen(3030);
});

