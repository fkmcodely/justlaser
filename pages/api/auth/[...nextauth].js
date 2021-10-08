import NextAuth from "next-auth";
import { signIn } from "next-auth/client";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Inicio de Sesión',
            credentials: {
                username: { label: "Usuario" , type : "text", placeholder: "Juanito..."},
                password: { label: "Clave" , type : "password", placeholder: "******"},
            },
            async authorize(credentials = {}, req) {
                const user = {
                    name: 'Kevin',
                    email: 'Rivera',
                    image: 'avatar'
                }
                return user;
            },
        })
    ],
    callbacks: {
        async signIn(session, token) {
            session.user = token.user;
            return session
        },
        async jwt(token, user) {
            if (user) token.user = user;
            return token;
        },
        async session(session, token) {
            session.user = token.user;
            return session;
        }
    }
});