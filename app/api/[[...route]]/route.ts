import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import accounts from "./accounts";
import categories from './categories';
import transactions from "./transactions";
import summary from "./summary";
import plaid from "./plaid";
import subscriptions from "./subscriptions";
// import { HTTPException } from 'hono/http-exception';

// export const runtime = 'edge'

const app = new Hono().basePath('/api');

// app.onError((err, c) => {
//     if (err instanceof HTTPException) {
//         return err.getResponse();
//     }
//     return c.json({ error: "Internal Error" }, 500);
// });

const routes = app
    .route("/accounts", accounts)
    .route("/categories", categories)
    .route("/transactions", transactions)
    .route("/summary", summary)
    .route("/plaid", plaid)
    .route("/subscriptions", subscriptions);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;