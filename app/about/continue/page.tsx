import React from "react";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: any[] = await res.json();
  return <div>this is continue</div>;
};

export default page;
