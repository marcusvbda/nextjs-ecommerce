import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const apiUrl = process.env.API_ROUTE;

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch(`${apiUrl}/authenticate`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Usuário ou senha inválidos");
        }

        const { user } = await res.json();
        if (!user) {
          throw new Error("Usuário ou senha inválidos");
        }

        return user;
      },
    } as any),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account && user) {
        return {
          ...token,
          userId: user.id,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },
    async session({ session, token }: any) {
      session.user.token = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;
      session.user.id = token.userId;
      return session;
    },
  },
};
