type Gym = {
  business_status: string;
  rating: number;
  allowed_gender: string;
  name: string;
  monthly_fee: number;
  attributes: string[];
  // Add other properties as needed
};

type GymCardProps = {
  gyms: Gym[];
};

const GymCard: React.FC<GymCardProps> = ({ gyms }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 ">
        {gyms?.map((gym, index: number) => (
          <div
            key={index}
            className="relative flex flex-col items-start justify-start max-w-xs p-3 space-y-3 bg-white border border-white shadow-lg ju md:flex-row md:space-x-5 md:space-y-0 rounded-xl md:max-w-5xl"
          >
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
                  {gym?.business_status}
                </p>
                <div className="flex items-center">
                  <p className="ml-1 text-sm font-bold text-gray-600">
                    Rating: {gym?.rating}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                {/* <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div> */}
                <div className="hidden px-3 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full md:block">
                  {gym?.allowed_gender}
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-800 md:text-3xl">
                {gym?.name}
              </h3>
              <p className="text-base text-gray-500 md:text-lg">
                Location : Google Map Link
              </p>

              <ul
                key={index}
                className="flex gap-3 *:rounded-full *:border *:border-sky-100 *:bg-sky-200 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 "
              >
                {gym?.attributes?.map((attribute: string, index: number) => (
                  <div key={index}>
                    <li>{attribute}</li>
                  </div>
                ))}
              </ul>

              <p className="text-xl font-black text-gray-800">
                {`৳${gym?.monthly_fee}`}
                <span className="text-base font-normal text-gray-600">
                  /Month
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymCard;
