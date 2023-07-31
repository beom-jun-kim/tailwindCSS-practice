import type { NextPage } from "next";
import RootLayout from "./layout";

const Home: NextPage = () => {
  return (
    <RootLayout title="Home" hasTabBar>
      <div className="flex flex-col space-y-5 py-10 px-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex border-b cursor-pointer justify-between max-w"
          >
            <div className="flex space-x-4 pb-5">
              <div className="w-20 h-20 bg-gray-400 rounded-sm" />
              <div className="flex flex-col justify-center">
                <h3 className="font-medium text-md">New iPhone 14</h3>
                <span className="text-gray-500 text-sm block">Black</span>
                <span className="font-medium text-lg">$95</span>
              </div>
            </div>
            <div className="flex items-end space-x-3 mb-2">
              {/* svg : https://heroicons.dev/ */}
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
            </div>
          </div>
        ))}
        <button className="fixed hover:bg-blue-300 right-7 bottom-20 bg-blue-500 rounded-full p-4 text-white shadow-lg">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </RootLayout>
  );
};

export default Home;
