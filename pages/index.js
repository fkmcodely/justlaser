import React, { useEffect , useState } from "react";
import { useRouter } from "next/router";
import ExampleComponent from "../components/ExampleComponent";
import styles from "../styles/Home.module.css";
import { useSession, signIn, singOut, getSession, signOut } from "next-auth/client";
import Banner from "../components/Banner";

const languages = {
  en: require('../locale/en/commons.json'),
  es: require('../locale/es/commons.json'),
}

export default function Home() {
  const router = useRouter();
  const [user,setUser] = useState();
  const { locale } = router;
  const { session , loading } = useSession();
  const localCopy = languages[locale];

  useEffect(() => {
    const session = async (req,res) => {
      const user = await getSession({ req });
      if(user?.user) {
        setUser(user.user);
      } else {
        setUser(false);
      }
    }
    session();
  },[])

  return (
    <>
      <Banner />
    </>
  );
}
