import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token, user, account, profile }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      console.log(session, user, token);
      // const uss = await fetch("https://jsonplaceholder.typicode.com/users/1");
      // const newUser = await uss.json();
      return {
        ...session,
        user: {
          role: token.role,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        phone: {},
        // otp: {},
      },

      authorize: async (credentials) => {
        console.log(credentials);
        const user = {
          email: "sdfsdf@gmail.com",
          id: 2,
          image: "htt",
          name: "sasd",
        };

        return {
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
