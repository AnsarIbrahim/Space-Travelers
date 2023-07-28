import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

export default function Missions() {
  const { missions } = useSelector((store) => store.mission);
  return (
    <div className="mission-container">
      <table>
        <thead className="header">
          <th>Mission</th>
          <th>Thaicom</th>
          <th>Status</th>
        </thead>
        {
    missions.map((mission) => {
      const index = missions.indexOf(mission);
      return (
        <Mission
          missionId={mission.id}
          missionName={mission.name}
          description={mission.description}
          reserved={mission.reserved}
          index={index}
          key={index}
        />
      );
    })

}
      </table>
    </div>
  );
}
