import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    } as any),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
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

        // const res = await fetch(
        //   "https://cloudcoders.azurewebsites.net/api/tokens",
        //   {
        //     method: "POST",
        //     body: JSON.stringify(payload),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );

        // const user = await res.json();
        // if (!res.ok) {
        //   throw new Error(user.message);
        // }
        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }
        return {
          id: 12,
          name: "vinicius",
          email: credentials.email,
          image: "https://avatars.githubusercontent.com/u/123?s=60&v=4",
        };
        // Return null if user data could not be retrieved
        return null;
      },
    } as any),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
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
