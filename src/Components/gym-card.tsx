const GymCard = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="relative flex flex-col max-w-xs p-3 mx-auto space-y-3 bg-white border border-white shadow-lg md:flex-row md:space-x-5 md:space-y-0 rounded-xl md:max-w-5xl">
          {/* <div className="grid w-full bg-white md:w-1/3 place-items-center">
            <img
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              className="rounded-xl"
            />
          </div> */}
          <div className="flex flex-col w-full p-3 space-y-6 bg-white">
            <div className="flex justify-between item-center">
              <p className="hidden font-medium text-gray-500 md:block">
                Vacations
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="ml-1 text-sm font-bold text-gray-600">
                  4.96
                  <span className="font-normal text-gray-500">
                    (76 reviews)
                  </span>
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="hidden px-3 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full md:block">
                Superhost
              </div>
            </div>
            <h3 className="text-xl font-black text-gray-800 md:text-3xl">
              The Majestic and Wonderful Bahamas
            </h3>
            <p className="text-base text-gray-500 md:text-lg">
              Location : Google Map Link
            </p>

            <ul className="flex gap-3  *:rounded-full *:border *:border-sky-100 *:bg-sky-200 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ">
              <li>Steam Room</li>
              <li>Air Conditioning</li>
              <li></li>
            </ul>

            <p className="text-xl font-black text-gray-800">
              $110
              <span className="text-base font-normal text-gray-600">
                /night
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymCard;
