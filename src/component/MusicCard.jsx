const MusicCard = ({songName,singer,poster,movieName}) => {
  return (
    <div
      data-aos="zoom-in-left"
      className="w-full max-w-[320px] min-w-[320px] bg-slate-600 shadow-md rounded-lg overflow-hidden dark:bg-zinc-900"
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <div className="size-12">
            <img
              className="w-full h-full object-cover"
              src={poster}
              alt={songName}
            />
          </div>
          {/* <svg
          class="h-6 w-6 text-yellow-500"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg> */}
          <div className="mx-3">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              {songName}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{singer}</p>
            <p className="text-pink-600">{movieName}</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            id="heart"
            className="h-6 w-6 text-red-500"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400 ml-4"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center" />
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          </svg>
          <div className="w-full mx-3">
            <div className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-800">
              <div className="absolute left-0 top-0 h-full bg-yellow-500 w-1/2" />
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
        </div>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
          <span> 00:03 </span>
          <span> 3:35 </span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
