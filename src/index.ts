import cors from "@elysia/cors";
import {Elysia} from "elysia";
import {GlobalErrorPlugin} from "./plugins/globalError.plugin";
import {GlobalResponsePlugin} from "./plugins/globalResponse.plugin";
import {BetterAuthPlugin} from "./plugins/betterAuth.plugin";
import {users} from "./modules/users";

const frontendUrl = process.env.FRONTEND_URL!

const app = new Elysia({prefix: "/api"})
    .use(cors({
        origin: [frontendUrl, "http://127.0.0.1:5173", "http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    }))
    .use(GlobalErrorPlugin)     // global error handler
    .use(GlobalResponsePlugin)      // global response handler
    .use(BetterAuthPlugin)
    .use(users)
    .listen(7000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);