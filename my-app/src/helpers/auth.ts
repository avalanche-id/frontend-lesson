import { AuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Ethereum",
      credentials: {
        message: {
          label: "Message",
          type: "text",
          placeholder: "0x0",
        },
        signature: {
          label: "Signature",
          type: "text",
          placeholder: "0x0",
        },
        csrfToken: {
          label: "Nonce",
          type: "text",
        },
      },
      async authorize(credentials) {
        try {
          console.log({ credentials });
          const siwe = new SiweMessage(credentials?.message || "{}");
          console.log({ siwe });
          const nextAuthUrl = new URL(process.env.NEXTAUTH_URL!);

          const result = await siwe.verify({
            signature: credentials?.signature || "",
            domain: nextAuthUrl.host,
            nonce: credentials?.csrfToken,
          });

          if (result.success) {
            return { id: siwe.address };
          }
          return null;
        } catch (e) {
          console.error("Error during authorization:", e);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.name = token.sub;
      }
      return session;
    },
  },
};
