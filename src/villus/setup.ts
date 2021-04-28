import { useClient, defaultPlugins, ClientPlugin } from "villus";
import { authPlugin } from "@/villus/plugins/auth";
import {
  handleSubscriptions,
  subscriptionForwarder,
} from "@/villus/plugins/sub";
export const useVillus = () => {
  const api = process.env.VUE_APP_API as string;
  useClient({
    url: api,
    use: [
      authPlugin(),
      handleSubscriptions(subscriptionForwarder) as ClientPlugin,
      ...defaultPlugins(),
    ],
    cachePolicy: "network-only",
  });
};
