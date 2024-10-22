import Jumbotron from "@/features/Jumbotron";
import MakingProcess from "@/features/MakingProcess";
import Offers from "@/features/Offers";
import PreviousWorks from "@/features/PreviousWorks";
import Request from "@/features/Request";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Offers />
      <PreviousWorks />
      <MakingProcess />
      <Request />
    </>
  );
}
