import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

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

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 26 * 60 * 60
    },
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
    },
});