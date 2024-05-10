import { useEffect } from "react";
import "./App.css";
import {
  Drawer,
  // DrawerPortal,
  // DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
// import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Message from "@/components/ui/message";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  useEffect(() => {
    console.log("asd");
  }, []);

  return (
    <>
      {" "}
      <div
        className="flex items-center justify-center gap-[813px] p-2 bg-[#1C1C1C] shadow-2xl

shadow-indigo-500/30"
      >
        <p className="text-white font-semibold">
          <a href="https://github.com/JustArtiom/lilweeb">lilweeb.</a>
        </p>
        <Drawer>
          <DrawerTrigger>
            <Button className="bg-white text-white-foreground hover:bg-white/70 rounded-xl">
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent className="flex items-center justify-center">
            <DrawerClose>
              <Button className="w-[110px] h-[10px] bg-[#323232] rounded-full"></Button>
            </DrawerClose>
            <DrawerHeader className="items-center flex flex-col">
              <DrawerTitle className="text-white">Creativity</DrawerTitle>
              <DrawerDescription className="text-white">
                Select how creative you want the AI to be!
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              {/* <Slider
            className="w-[300px]"
            defaultValue={[50]}
            max={100}
            step={1}
          /> */}
              <Carousel>
                <Carousel orientation="vertical">
                  <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                  </CarouselContent>
                </Carousel>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className=" flex flex-col h-screen max-w-[1000px] w-[90%] mx-auto">
        <div className="items-center flex flex-1 flex-col ">
          <div className="flex-1 w-full overflow-y-auto max-h-[calc(100vh-168px)]">
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message>
              I got a wedding ring too, a wedding band. I didnt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
            <Message you={true}>
              I got a wedding ring too, a wedding band. I didt really go buy no
              necklace. It just rhymed, so I threw it in there. I got a couple
              of these rings. Im married to the money.
            </Message>
          </div>
          <div className=" w-full p-3">
            <Input className="bg-[#1C1C1C] border border-1 text-white font-medium bottom-0 max-w-[800px] w-[90%] mx-auto" />
            <p className="text-[#a1a1a1] font-normal text-xs mt-2 w-full text-center">
              Made and implemented by{" "}
              <span className="underline">
                <a href="https://github.com/adrianrqr">Adrian</a>
              </span>{" "}
              &{" "}
              <span className="underline">
                <a href="https://github.com/JustArtiom">Artiom</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
