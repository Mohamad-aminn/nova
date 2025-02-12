import { useSession } from "next-auth/react";
import React from "react";

const Sess = () => {
  const session = useSession();

  console.log(session);
  return <div></div>;
};

export default Sess;
