import React, { useEffect , useState } from "react";
import { useRouter } from "next/router";
import ExampleComponent from "../components/ExampleComponent";
import styles from "../styles/Home.module.css";
import { useSession, signIn, singOut, getSession, signOut } from "next-auth/client";
import Banner from "../components/Banner";
import Steps from "../components/Steps/Steps";
import Services from "../components/Services";
import Reviews from "../components/Reviews/Reviews";
import ContactForm from "../components/ContactForm/ContactForm";
import { Dropdown } from "semantic-ui-react";
import DropDownJust from "../components/DropDownJust";

const languages = {
  en: require('../locale/en/commons.json'),
  es: require('../locale/es/commons.json'),
}

export default function Servicios() {
  const title = 'Servicios';
  const router = useRouter();
  const { locale } = router;
 
  return (
    <>
      <DropDownJust title={title} />
    </>
  );
}
