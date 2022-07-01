import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, _) {
    return Response.redirect(req.url + "/flw");
  },
};
