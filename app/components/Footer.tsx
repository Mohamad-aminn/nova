import React from "react";
import Pattern from "./Pattern";
import Radialbg from "./Radialbg";

const Footer = () => {
  return (
    <div className="h-[60vh] w-full overflow-hidden bg-black relative z-50">
      <Pattern component={1} />
      <Radialbg className="h-8 top-56 w-[95vw] bg-[#39fdfaa9]/80" blur={150} />

      <div className="footer-cp">تمام حقوق این وبسایت برای تیم نوا می باشد</div>
    </div>
  );
};
export default Footer;
