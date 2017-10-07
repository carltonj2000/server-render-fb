# React Server Side Rendering

The code in this repository is based on the
[Server-side Rendering React from Scratch](https://www.youtube.com/watch?v=82tZAPMHfT4)
video.

  - `firebase init hosting` to setup firebase hosting
  - `firebase serve` to serve/hosting locally
  - `firebase init functions` to setup firebase cloud functions
  - `firebase serve --only functions,hosting` to serve/hosting locally
  - `firbase use --add` to add another firebase project and alias.

Deployments:

  - [Server](https://server-render.firebaseapp.com)
  - [Client](https://)

When deploying the server version rename `index.html` in `public` so that
the functions `index` is picked up and used.
Use `firebase use <alias>` to select the deployment, where the `<alias>`
is either `client` or `server`.
