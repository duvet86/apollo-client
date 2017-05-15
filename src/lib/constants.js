const SSL = process.env.NODE_ENV === "production" ? "s" : "";
const URL = process.env.NODE_ENV === "production"
  ? "//sleepy-plains-58280.herokuapp.com"
  : "//localhost:8080";

export const GRAPHQL_URL = `http${SSL}:${URL}/graphql`;
export const WEBSOCKET_URL = `ws${SSL}:${URL}/subscriptions`;
