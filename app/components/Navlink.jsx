import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"

const Navlink = ({ href, title,setNavbarOpen }) => {
  const [hover, setHover] = useState(false);
  const pathname = usePathname()

  const isInternalAnchor = href.startsWith("#");

  const Tag = isInternalAnchor && pathname !== "/" ? "a" : Link;


  return (
    <Tag
      href={pathname !== "/" && isInternalAnchor ? `/${href}` : href}
      className="group block py-2 pl-3 pr-4  sm:text-xl rounded md:p-0 hover:text-white sm:hover:scale-110 transition-transform duration-200"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => setNavbarOpen(false)}
      
    >
      <div className="relative">
        <span
          className=" relative z-10
               text-white
               transition-[color] duration-500 ease-in-out
               group-hover:text-transparent group-hover:bg-clip-text
               group-hover:bg-[linear-gradient(to_right,rgba(180,125,242,1))]
               group-hover:drop-shadow-[0_0_2px_rgba(180,125,242,1)]"
        >
          {title}
        </span>
        <span
          className="
               text-white absolute left-0 z-1 group-hover:text-transparent
               "
        >
          {title}
        </span>
      </div>

      <div className=" w-full h-[2px]  rounded-full scale-x-0 group-hover:scale-100 bg-[rgba(180,125,242,1)] transition-transform duration-200 origin-left"></div>
    </Tag>
  );
};

export default Navlink;
