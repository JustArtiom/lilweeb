import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";

export const Navbar = () => (
  <div className="bg-[#1C1C1C] shadow-2xl py-2">
    <div className="container flex items-center justify-between">
      <p className="text-white font-semibold">
        <a href="https://github.com/JustArtiom/lilweeb" target="_blank">
          lilweeb.
        </a>
      </p>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="flex items-center justify-center">
          <DrawerHeader className="items-center flex flex-col">
            <DrawerTitle className="text-white">Creativity</DrawerTitle>
            <DrawerDescription className="text-white">
              Select how creative you want the AI to be!
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
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
  </div>
);
