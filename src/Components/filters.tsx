import { Input } from "@/Components/ui/input";
import { Button } from "./ui/button";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { Slider } from "@/Components/ui/slider";
import { useState } from "react";

const Filters = () => {
  const [sliderValue, setSliderValue] = useState([30, 50]);
  // const handleSliderChange = () => {
  //     setSliderValue(value);
  //     console.log(setSliderValue);
  //   };
  console.log(sliderValue);
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between ">
          <p className="text-xl font-semibold">Filters</p>
          <p> Reset </p>
        </div>
        <div className="my-2 border-b-2 border-black border-solid"></div>
        <div>
          <p className="py-2 text-lg font-semibold">Gym Name</p>
          <div className="flex items-center w-full max-w-sm space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Search</Button>
          </div>
        </div>
        <div className="">
          <p className="py-2 text-lg font-semibold">Price Range</p>
          <Slider
            className="py-2"
            value={sliderValue}
            max={100}
            step={1}
            minStepsBetweenThumbs={10}
            // value={sliderValue}
            onValueChange={(newValue) => setSliderValue(newValue)}
          />
          <div className="flex items-center justify-center py-3">
            <Input
            className="appearance-none no-spinner"
              type="number"
              value={sliderValue[0]}
              onChange={(event) => {
                const newValue = event.target.value;
                setSliderValue([newValue, sliderValue[1]]);
              }}
              placeholder="Min" min={0} max={sliderValue[1]}
            />
            <p className="px-4">To</p>
            <Input
              type="number"
              value={sliderValue[1]}
              onChange={(event) => {
                const newValue = event.target.value;
                setSliderValue([sliderValue[0], newValue]);
              }}
              placeholder="Max" max={100} min={sliderValue[0]}
            />
          </div>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Amenities</p>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Non AC</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">AC </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <div>
            <p className="py-2 text-lg font-semibold">Status</p>
            <div className="flex items-center space-x-2">
              <Checkbox className="w-5 h-5" id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Operational
              </label>
              <Checkbox className="w-5 h-5" id="termss" />
              <label
                htmlFor="termss"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Non Operational
              </label>
            </div>
          </div>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Rating</p>
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">5</p>
                <StarFilledIcon />
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">4</p>
                <StarFilledIcon />
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">3</p>
                <StarFilledIcon />
              </div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default Filters;
