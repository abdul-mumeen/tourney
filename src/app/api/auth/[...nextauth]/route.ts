import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
console.log(process.env.GOOGLE_CLIENT_ID ,"term")

export const authOptions = {
  // debug:true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
