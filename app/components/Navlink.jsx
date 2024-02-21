import Link from "next/link";
import { useState } from "react";

const Navlink = ({ href, title, l33t }) => {
  const [hover, setHover] = useState(false);
 

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white sm:hover:scale-110 "
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
        {title}
      
    </Link>
  );
};

export default Navlink;
