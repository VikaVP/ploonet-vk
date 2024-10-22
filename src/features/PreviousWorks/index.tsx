import { prevWorks } from "./content";

export default function PreviousWorks() {
  return (
    <section className="w-full flex justify-center items-center flex-col mt-16 medium:mt-8">
      <div className="text-center">
        <h3 className="font-bold text-xl medium:text-5xl w-max bullet-header relative">
          PREVIOUS WORKS
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col medium:flex-row mt-16 w-full">
        <div className="grid grid-cols-2 flex-1 w-full">
          {prevWorks.slice(0, 6).map((work, i) => (
            <div
              className="relative h-[120px] medium:h-64 bg-cover bg-center flex-1"
              style={{
                backgroundImage: `url(${work.src})`,
              }}
              key={i}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 flex-1 w-full">
          {prevWorks.slice(6, 12).map((work, i) => (
            <div
              className="relative h-[120px] medium:h-64 bg-cover bg-center flex-1"
              style={{
                backgroundImage: `url(${work.src})`,
              }}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
