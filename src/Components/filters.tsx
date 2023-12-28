import { Input } from "@/Components/ui/input";
import { Button } from "./ui/button";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";
import { StarFilledIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Slider } from "@/Components/ui/slider";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/Context/global-state-provider";
import { AllowedGenderEnum } from "@/app/enum/allowed-gender.enum";
import { BusinessStatusEnum } from "@/app/enum/business-status.enum";
import { AttributeEnum } from "@/app/enum/attribute.enum";

const Filters = () => {
  const [sliderValue, setSliderValue] = useState([30, 50]);

  const {
    name,
    status,
    priceRange,
    gender,
    priceMax,
    priceMin,
    rating,
    amenities,
    setAttribute,
  } = useGlobalContext();

  const handleStatusChange = (value: BusinessStatusEnum) => {
    setAttribute("status", value);
  };

  const handleGenderChange = (value: AllowedGenderEnum) => {
    setAttribute("gender", value);
  };

  const handlePriceRangeChange = (value: number[]) => {
    setSliderValue(value);
    setAttribute("priceMin", value[0]);
    setAttribute("priceMax", value[1]);
  };

  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleRatingChange = (values: string[]) => {
    setAttribute("rating", values);
    // console.log("Selected Values:", values);
  };

  return (
    <div>
      <Button
        onClick={() =>
          console.log(
            "status",
            status,
            "amenities",
            amenities,
            "name",
            name,
            "priceRange",
            priceRange,
            "gender",
            gender,
            "rating",
            rating,
            "priceMin",
            priceMin,
            "priceMax",
            priceMax
          )
        }
      >
        press
      </Button>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between ">
          <p className="text-xl font-semibold">Filters</p>
          <p> Reset </p>
        </div>
        <div className="my-2 border-b-2 border-black border-solid"></div>
        <div>
          <p className="py-2 text-lg font-semibold">Gym Name</p>
          <div className="flex items-center w-full max-w-sm space-x-2">
            <Input
              onChange={(e) => setAttribute("name", e.target.value)}
              type="text"
              placeholder="Gym Name"
            />
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
            onValueChange={handlePriceRangeChange}
          />
          <div className="flex items-center justify-center py-3">
            <Input
              className="text-center appearance-none"
              type="number"
              value={sliderValue[0]}
              onChange={(event) => {
                const newValue = event.target.value;
                setSliderValue([newValue, sliderValue[1]]);
                setAttribute("priceMin", Number(newValue));
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
                setAttribute("priceMax", Number(newValue));
              }}
              placeholder="Max"
              max={100}
              min={sliderValue[0]}
            />
          </div>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Status</p>
          <RadioGroup onValueChange={handleStatusChange}>
            {Object.values(BusinessStatusEnum).map((status, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={status} id="r1" />
                <Label htmlFor="r1">{status}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Allowed Gender</p>
          <RadioGroup
            onValueChange={handleGenderChange}
            defaultValue="combined"
          >
            {Object.values(AllowedGenderEnum).map((gender, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={gender} id="r1" />
                <Label className="flex gap-2" htmlFor="r1">
                  {gender}
                  <div
                    className="transition duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    data-te-toggle="tooltip"
                    title={
                      gender === AllowedGenderEnum.MALE
                        ? "MALE"
                        : gender === AllowedGenderEnum.FEMALE
                        ? "FEMALE"
                        : "COMBINED"
                    }
                  >
                    <InfoCircledIcon />
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div>
          <div>
            <p className="py-2 text-lg font-semibold">Amenities</p>
            <div className="flex flex-col gap-2">
              {Object.values(AttributeEnum).map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Checkbox
                    // value={amenity}
                    checked={amenities?.includes(amenity)}
                    name="amenity"
                    onCheckedChange={(checked) => {
                      checked
                        ? setAttribute("amenities", [...amenities, amenity])
                        : setAttribute(
                            "amenities",
                            amenities.filter((x) => x !== amenity)
                          );
                    }}
                    className="w-5 h-5"
                    id={amenity}
                  />
                  <label
                    htmlFor={amenity}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="py-2 text-lg font-semibold">Rating</p>
          <ToggleGroup
            onValueChange={handleRatingChange}
            className="flex-wrap"
            type="multiple"
            variant="outline"
          >
            {Array.from({ length: 5 }, (_, index) => (
              <ToggleGroupItem
                key={index}
                value={String(5 - index)}
                aria-label={`Toggle ${5 - index}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <p className="pt-1">{5 - index}</p>
                  <StarFilledIcon />
                </div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default Filters;
