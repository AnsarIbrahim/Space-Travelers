import React from 'react';
import { useDispatch } from 'react-redux';
import { reserve, cancelReserve } from '../../redux/rockets/rocketsSlice';

export default function Rocket({
  rocketName, description,
  flickrImages, id, reserved,
}) {
  const dispatch = useDispatch();
  function reserveHandler(id) {
    dispatch(reserve(id));
  }
  function cancelReserveHandler(id) {
    dispatch(cancelReserve(id));
  }
  return (
    <>
      <div className="rocket-container">
        <img src={flickrImages} alt="" />
        {!reserved && (
        <div className="falc-conatainer">
          <h4>{rocketName}</h4>
          <p>{description}</p>
          <button
            type="button"
            onClick={() => {
              reserveHandler(id);
            }}
          >
            Reserve Rocket
          </button>
        </div>
        )}
        {reserved && (
        <div className="reserved-falc-conatainer">
          <h4>{rocketName}</h4>
          <p>
            <h5>Reserved</h5>
            {description}
          </p>
          <button
            type="button"
            onClick={() => {
              cancelReserveHandler(id);
            }}
          >
            Cancel Reservation
          </button>
        </div>
        )}
      </div>
    </>
  );
}
