import { getUser, signIn } from "@/utils/api";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  pages: {
    signIn: "/user/signin",
    newUser: "/user/signup",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "test@codeit.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const authResponse = await signIn({ email: credentials?.email, password: credentials?.password });
        if (authResponse.ok) {
          const token = await authResponse.json();
          return token;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.tokens = token as any;
      const [user] = await getUser(session.tokens.accessToken as string);
      session.user = {
        email: user.email,
        profileImage: user.image_source,
        name: user.name,
      };

      return session;
    },
  },

  session: {
    maxAge: 60 * 30,
  },
});
