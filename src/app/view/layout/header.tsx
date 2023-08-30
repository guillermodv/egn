import Image from "next/image";
import logo from "../../../img/flag.svg";

export default function HeaderBar() {
  return (
    <>
      <Image src={logo} width={30} height={30} className="m-4" alt="logo" />
      <p className="text-2xl font-bold">Monitoreo Principal</p>
    </>
  );
}
