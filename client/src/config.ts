// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '2reyk0iryg'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-n8tk2y3o4xtmi5dw.us.auth0.com',            // Auth0 domain
  clientId: 'OxuMgw9cuuuFGgagaoFTQbEhQ8LnmM5L',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
