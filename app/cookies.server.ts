
import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const user = createCookie("user");
