import { Input } from "@/Components/ui/input";
import { Button } from "./ui/button";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";

import { StarFilledIcon, InfoCircledIcon } from "@radix-ui/react-icons";
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
            <Input type="text" placeholder="Gym Name" />
            {/* <Button type="submit">Search</Button> */}
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
              className="text-center appearance-none"
              type="number"
              value={sliderValue[0]}
              onChange={(event) => {
                const newValue = event.target.value;
                setSliderValue([newValue, sliderValue[1]]);
              }}
              placeholder="Min"
              min={0}
              max={sliderValue[1]}
            />
            <p className="px-4">To</p>
            <Input
              className="text-center"
              type="number"
              value={sliderValue[1]}
              onChange={(event) => {
                const newValue = event.target.value;
                setSliderValue([sliderValue[0], newValue]);
              }}
              placeholder="Max"
              max={100}
              min={sliderValue[0]}
            />
          </div>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Status</p>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Operational</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Non Operational</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Allowed Gender</p>
          <RadioGroup defaultValue="combined">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="combined" id="r1"/>
              <Label className="flex gap-2" htmlFor="r1">
                Combined
                <div
                  className="transition duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Hi! I'm tooltip"
                >
                  <InfoCircledIcon />
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="r2" />
              <Label className="flex gap-2" htmlFor="r2">Male
              <div
                  className="transition duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Hi! I'm tooltip"
                >
                  <InfoCircledIcon />
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="r3" />
              <Label className="flex gap-2" htmlFor="r2">Female
              <div
                  className="transition duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  title="Hi! I'm tooltip"
                >
                  <InfoCircledIcon />
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <div>
            <p className="py-2 text-lg font-semibold">Amenities</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5" id="air_condition" />
                <label
                  htmlFor="air_condition"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Air Condition
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5" id="parking" />
                <label
                  htmlFor="parking"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Parking
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5" id="juice_bar" />
                <label
                  htmlFor="juice_bar"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Juice Bar
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5" id="treadmill" />
                <label
                  htmlFor="treadmill"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Treadmill
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5" id="locker" />
                <label
                  htmlFor="locker"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Locker
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5" id="bath" />
                <label
                  htmlFor="air_condition"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bath
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Rating</p>
          <ToggleGroup className="flex-wrap" type="multiple" variant="outline">
            <ToggleGroupItem value="5" aria-label="Toggle 5">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">5</p>
                <StarFilledIcon />
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="4" aria-label="Toggle 4">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">4</p>
                <StarFilledIcon />
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="3" aria-label="Toggle 3">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">3</p>
                <StarFilledIcon />
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="2" aria-label="Toggle 2">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">2</p>
                <StarFilledIcon />
              </div>
            </ToggleGroupItem>
            <ToggleGroupItem value="1" aria-label="Toggle 1">
              <div className="flex items-center justify-center gap-2">
                {" "}
                <p className="pt-1">1</p>
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
