import React from "react";
import Place from "../types/Place";
import { useNavigate } from "react-router-dom";

interface Props {
  place: Place;
}

const PlaceComponent: React.FC<Props> = ({ place }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{place.name}</h2>

      <p>distance: {place.dist}</p>

      <div>
        <p className="text-gray-700">
          <span className="font-semibold">Tags:</span>
          <ul className="list-disc pl-6">
            {place.kinds.split(",").map((tag, index) => (
              <li key={index} className="text-gray-700">
                {tag}
              </li>
            ))}
            <button
              onClick={() => navigate(`/place/${place.xid}`)}
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            >
              explore
            </button>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PlaceComponent;
