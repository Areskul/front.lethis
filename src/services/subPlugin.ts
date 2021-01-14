const ws = process.env.VUE_APP_SUB as string;

export function handleSubscriptions(forwarder: any): any {
  const forward = forwarder;
  return function subscriptionsHandlerPlugin({ operation, useResult }) {
    if (operation.type !== "subscription") {
      return;
    }
    if (!forward) {
      throw new Error("No subscription forwarder was set.");
    }
    useResult(forward(operation) as any, true);
  };
}

//import { createClient } from "graphql-ws";
//const wsClient = createClient({
//url: ws,
//});
//export const subscriptionForwarder = (operation) => {
//return {
//subscribe: (obs) => {
//wsClient.subscribe(
//{
//query: operation.query as string,
//},
//obs
//);
//},
//};
//};

import { SubscriptionClient } from "subscriptions-transport-ws";
const subscriptionClient = new SubscriptionClient(ws, {
  reconnect: true,
});
export const subscriptionForwarder = (operation) =>
  subscriptionClient.request(operation);
