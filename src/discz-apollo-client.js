import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const WEBCLIENT_TOKEN = 'bfe6d5eda389f2c15b309518ada360b2e8d986d1'

const DEV_URI = 'http://localhost:8000/api/v2/graphql/'
const PROD_URI = 'https://api.disczmusic.com/api/v2/graphql/'

const link = new HttpLink({
  uri: DEV_URI,
  headers: {
    Authorization: `Token ${WEBCLIENT_TOKEN}`,
  },
})

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default apolloClient
