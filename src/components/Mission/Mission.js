import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveMission, cancelMission } from '../../redux/missions/missionsSlice';

export default function Mission({
  missionId, missionName, description, reserved,
}) {
  const dispatch = useDispatch();
  function missionReserveHandeler(missionId) {
    dispatch(reserveMission(missionId));
  }
  function missionCancelHandeler(missionId) {
    dispatch(cancelMission(missionId));
  }
  return (
    <tr
      className="comp-row"
      id={missionId}
    >
      <th className="name">{missionName}</th>
      <th><p className="para">{description}</p></th>
      {!reserved && (
        <>
          <th><button type="button" className="member-btn">NOT A MEMBER</button></th>
          <th>
            <button
              type="button"
              className="join-btn"
              onClick={() => {
                missionReserveHandeler(missionId);
              }}
            >
              Join Mission
            </button>
          </th>
        </>
      )}
      {reserved && (
        <>
          <th>
            <button
              type="button"
              className="active-member-btn"
            >
              Active Member
            </button>
          </th>
          <th>
            <button
              type="button"
              className="leave-btn"
              onClick={() => {
                missionCancelHandeler(missionId);
              }}
            >
              Leave Mission
            </button>
          </th>
        </>
      )}

    </tr>
  );
}
