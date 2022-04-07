import { GRAPHQL_URL } from "../api"
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client"


const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: {
            keyArgs: false,
            merge(existing = [], incoming, { args: { offset = 0 }}: Record<string, any>) {
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[offset + i] = incoming[i];
              }
              return merged;
            },
          }
        }
      }
    }
  })
})


export default client