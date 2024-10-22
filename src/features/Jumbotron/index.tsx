import Image from "next/image";
import Arrow from "../../../public/arrow-left.svg";

export default function Jumbotron() {
  return (
    <section className="w-full h-[50vh] xl:h-screen jumbotron flex justify-end pr-20 items-center ">
      <div className="h-[125px] w-[125px] rounded-full gradient lg:mt-[-30vh] xl:mt-[-50vh] flex items-center justify-center p-4 flex-col gap-2 hidden medium:flex">
        <a className="font-bold text-[19px] text-center cursor-pointer hover:underline">
          제작 <br /> 문의하기
        </a>
        <Image src={Arrow} alt={"Arrow"} className="opacity-[60%]" />
      </div>
    </section>
  );
}
