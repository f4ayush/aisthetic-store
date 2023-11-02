import React, { useEffect, useState } from 'react';
interface DaysOpen {
  day: string;
  open_time: string;
  close_time: string;
  _id: string;
}

interface DaysOpenProps {
  daysOpen: DaysOpen[];
}

const DailyTimeTable: React.FC<DaysOpenProps> = ({ daysOpen }) => {

  return (
    <div className="justify-center items-start flex w-full grow flex-col mt-4">
      {
        daysOpen.map(day => (
          <div key={day._id} className="items-start self-stretch flex justify-between gap-0">
            <div className="justify-center text-black text-base self-stretch">
              {day.day}
            </div>
            <div className="justify-center text-black text-base self-stretch">
              <span>
                {day.open_time.replace(":00", "")} - {day.close_time.replace(":00", "")}
              </span>
            </div>
          </div>
        ))
      }
    </div>

  );
}

export default DailyTimeTable;
