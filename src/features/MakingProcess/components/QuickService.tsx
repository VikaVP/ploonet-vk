import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { serviceSteps } from "../content";
import Image from "next/image";
import { Separator } from "@/components/ui";
import { cn } from "@/lib/utils";

const QuickService: React.FC = () => {
  return (
    <Card
      className={cn(
        "w-full rounded-[20px] relative overflow-hidden border-none",
        "box-gradient-border-medium",
      )}
    >
      <div className="medium:bg-[#141414] rounded-[18px] h-full medium:py-14 py-4">
        <CardHeader className="flex items-center justify-center mb-10">
          <CardTitle className="text-[32px] medium:text-[44px] font-bold text-center">
            <span className="bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent bg-[length:100%_100%] ">
              Ploonet Quickserve™
            </span>
          </CardTitle>
          <CardDescription className="text-base medium:text-2xl font-bold text-[#AAAAAA]">
            제작 시작 후 12~48시간 이내
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-[#141414] medium:bg-none p-[2px] medium:p-6 medium:py-16 medium:py-0 rounded-[20px] medium:rounded-none box-gradient-border medium:static">
          <div className="bg-[#141414] medium:bg-none rounded-[18px] medium:rounded-none h-full py-14 medium:py-0 pr-6 medium:px-0">
            {serviceSteps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "grid items-center w-full flex-row grid-cols-3 medium:gap-10 medium:mb-12 lg:gap-4 xl:gap-10 lg:mb-11 xl:mb-12",
                  index !== serviceSteps.length - 1 && "mb-12",
                )}
              >
                <div className="flex items-center flex-col flex-1 justify-self-end">
                  <div
                    className="flex items-center flex-col w-[82.37px] h-[82.37px] medium:w-[134px] medium:h-[134px] rounded-[19px] shadow box-gradient pt-2 gap-1 medium:gap-2"
                    style={{
                      boxShadow:
                        "inset 0 0 20px rgba(255, 78, 131, 0.5), inset 0 0 20px rgba(255, 187, 84, 0.5)",
                    }}
                  >
                    <p className="text-xs medium:text-lg mt-2">{step.number}</p>
                    {step.img ? (
                      <Image
                        src={step.img as string}
                        alt={step.number}
                        className={cn(
                          "drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm w-[30px] medium:w-[40px]",
                          index === serviceSteps.length - 1 &&
                            "hidden medium:block",
                          index === 2 && "medium:w-[56px]",
                        )}
                      />
                    ) : (
                      <div className="w-[30px] h-[30px]" />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1 medium:gap-2 flex-1 col-span-2 relative">
                  <p className="text-lg medium:text-2xl font-bold pl-8 medium:pl-0">
                    {step.title}
                  </p>
                  <p
                    className="text-sm medium:text-lg font-medium text-[#CCCCCC] pl-8 medium:pl-0"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  ></p>
                  {index !== serviceSteps.length - 1 && (
                    <Separator className="absolute left-0 bottom-[-30px] medium:bottom-[-40px] ml-4 medium:ml-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default QuickService;
