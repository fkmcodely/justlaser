import React from "react";
import { useRouter } from "next/router";

import DropDownJust from "../components/DropDownJust";

const languages = {
  en: require('../locale/en/commons.json'),
  es: require('../locale/es/commons.json'),
}

export default function Manual() {
  const router = useRouter();
  const title = 'Manual de usuario';

  return (
    <>
      <DropDownJust title={title} />
    </>
  );
}
