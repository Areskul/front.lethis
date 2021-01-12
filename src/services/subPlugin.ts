import { createClient } from "graphql-ws";

const ws = process.env.VUE_APP_SUB as string;
const wsClient = createClient({
  url: ws,
});

export const subscriptionForwarder = (operation: any) => {
  return {
    subscribe: (obs: any): any => {
      wsClient.subscribe(
        {
          query: operation.query as string,
        },
        obs
      );
    },
  };
};
