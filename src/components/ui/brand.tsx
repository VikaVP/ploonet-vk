import Link from "next/link";

import Logo from "../../../public/logo.svg";
import Image from "next/image";

const Brand = () => {
  return (
    <>
      <Link href="/">
        <Image src={Logo} alt={"Logo"} height={28} />
      </Link>
    </>
  );
};

export { Brand };
