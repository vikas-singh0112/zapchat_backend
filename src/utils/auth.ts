import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {prisma} from "../prisma/client";
import {EmailTransporter, sendMailConfig} from "./email/emailTransporter";
import verifyEmailHtml from "./email/verifyEmailHtml";

const frontendUrl = process.env.FRONTEND_URL!
export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL!,
    trustedOrigins: [frontendUrl, "http://localhost:5173", "http://127.0.0.1:5173"],
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        autoSignIn: false,
    },
    emailVerification: {
        sendOnSignUp: true,
        sendOnSignIn: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({user, token}) => {
            const verifyLink = `${frontendUrl}/verify-email?token=${token}`;
            const config = sendMailConfig({
                receiver: user.email,
                subject: "ZapChat account verification",
                htmlContent: verifyEmailHtml(verifyLink)
            })
            await EmailTransporter.sendMail(config)
        },
    }
})