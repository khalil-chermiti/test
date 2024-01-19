import { useEffect } from "react";
import useGetAttractivePlaces from "../places/usePlaces";
import { useNavigate, useParams } from "react-router-dom";

function Place() {
  const { placeInfo, getPlaceInfo } = useGetAttractivePlaces();
  const navigate = useNavigate();

  // get place id from react router
  const { id } = useParams();

  // fetch place info
  useEffect(() => {
    const run = async () => getPlaceInfo(id as string);
    run();
  }, []);

  if (placeInfo)
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto mt-10">
        <img className="rounded-t-lg" src={placeInfo.image} alt="" />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {placeInfo.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {placeInfo?.wikipedia_extracts?.text}
          </p>
          <h1 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            tags:{" "}
          </h1>
          <ul>
            {placeInfo.kinds.split(",").map(kind => (
              <li className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                {kind}
              </li>
            ))}
          </ul>
          <a
            href="#"
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            go back
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  else return <h1>loading...</h1>;
}

export default Place;
