import { deleteCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  await deleteCookie("access_token", { cookies });
  await deleteCookie("user", { cookies });
  await deleteCookie("userDetails", { cookies });

  return redirect("/");
};

export default page;
