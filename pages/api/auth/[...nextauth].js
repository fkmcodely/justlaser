import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoClient } from "mongodb";
const bcrypt = require('bcrypt');
const url =  'mongodb+srv://administrador:administrador@cluster0.fwkm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Inicio de Sesión',
            credentials: {
                username: { label: "Usuario" , type : "text", placeholder: "Juanito..."},
                password: { label: "Clave" , type : "password", placeholder: "******"},
            },
            async authorize(credentials = {}, req) {
                const { username , password } = req.body;
                let user;
                try {
                    const client = await MongoClient.connect(url);
                    const db = client.db();
                    const collection = db.collection("customers");
                    const request = await collection.findOne({email: username })

                    if (request.password) {
                        if (bcrypt.compareSync(password,request.password)) {
                           user = request;
                        }
                    } else {
                        user = null;
                    }
                } catch (err) {
                    console.log(err);
                }
                if (user) {
                    return user;
                } else {
                    return null
                }
            },
        })
    ],

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 26 * 60 * 60
    },
    callbacks: {
        async signIn({ user , account, profile, email, crendetials}) {
            return true;
        },
        async jwt({ token, user, account, profile, isNewUser}) {
            return token;
        },
    },
});