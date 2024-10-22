"use client";
import { Nav } from "@/shared";
import { Login, Language } from "@/widgets";
import { Brand, Button, Separator } from "@/ui";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, XIcon } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[99999] w-full border-b border-border/40 bg-black">
      <div className="container h-[100px] flex max-w-[1500px] items-center justify-between px-4">
        <div className="flex gap-4 lg:gap-6 items-center">
          <Brand />
        </div>
        <div className="hidden medium:block">
          <Nav />
        </div>

        <div className="flex items-center gap-8 hidden medium:flex">
          <Login />
          <Language />
        </div>

        <div className="medium:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              {!isOpen && (
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              )}
            </SheetTrigger>
            <SheetContent
              side="top"
              className="flex h-full w-full items-center justify-center bg-black bg-opacity-10"
              data-withoutclose={true}
            >
              <div className="w-[400px] rounded-lg border border-neutral-500 bg-black p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex w-full items-center justify-between self-start">
                    <h4 className="text-[18px]">Menu</h4>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-red-500"
                    >
                      <XIcon className="h-6 w-6" />
                    </Button>
                  </div>
                  <Nav />
                  <Separator />
                  <div className="flex flex-col medium:gap-8">
                    <Login />
                    <Language />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
