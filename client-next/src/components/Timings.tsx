import { useEffect, useRef, useState } from 'react';
import DailyTimeTable from './DailyTimeTable';
interface Timings {
    day: string;
    open_time: string;
    close_time: string;
    _id: string;
}

interface TimingsComponentProps {
    timings: Timings[];
}
const Timings: React.FC<TimingsComponentProps> = ({ timings }) => {
    const [storeStatus, setStoreStatus] = useState({ message: '', isOpen: false });
    const [showTimeTable, setShowTimeTable] = useState(false)
    const getCurrentDay = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        return days[now.getDay()];
    };

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const period = parseInt(hours) >= 12 ? 'PM' : 'AM';
        // Convert to 12-hour format
        const hours12 = parseInt(hours) % 12 || 12;
        // Create the formatted string
        return `${hours12}:${minutes} ${period}`;
    };

    const getNextOpenDay = () => {
        const currentDayIndex = new Date().getDay();
        const nextOpenDayIndex = (currentDayIndex + 1) % 7;
        const nextOpenDay = timings[nextOpenDayIndex - 1]
        console.log(currentDayIndex, timings)
        if ((currentDayIndex + 1) === nextOpenDayIndex && nextOpenDay) {
            setStoreStatus({ message: `Closed: Opens ${nextOpenDay.day} ${nextOpenDay.open_time}`, isOpen: false });
        } else {
            // Store is closed for the next few days, find the first open day
            const firstOpenDay = timings[0];
            setStoreStatus({ message: `Closed: Opens ${firstOpenDay.day} ${firstOpenDay.open_time}`, isOpen: false });
        }
    }
    const getNextOpenTime = () => {
        const currentDay = getCurrentDay();
        const currentTime = getCurrentTime();
        const todayTiming = timings.find((timing) => timing.day === currentDay);

        if (!todayTiming) {
            getNextOpenDay();
        } else {
            console.log(currentTime, todayTiming.open_time)
            const tempTimeCurrent = new Date(`2023-01-01 ${currentTime}`);
            const tempTimeOpen = new Date(`2023-01-01 ${todayTiming.open_time}`);
            const tempTimeClose = new Date(`2023-01-01 ${todayTiming.close_time}`);
            console.log(tempTimeCurrent, tempTimeOpen, tempTimeCurrent < tempTimeOpen)
            if (tempTimeCurrent < tempTimeOpen) {
                setStoreStatus({ message: `Closed: Opens at ${todayTiming.open_time}`, isOpen: false });
            } else if (tempTimeCurrent < tempTimeClose) {
                setStoreStatus({ message: `Open: Closes at ${todayTiming.close_time}`, isOpen: true });
            } else {
                getNextOpenDay();
            }
        }
    }

    useEffect(() => {
        getNextOpenTime()
    }, [])


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex">
                <span className="text-black text-base">{storeStatus.message}</span>
                {
                    showTimeTable && <img onClick={() => setShowTimeTable(!showTimeTable)} loading="lazy" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/collapse-arrow.png" alt="expand-arrow--v1" className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0" />
                }
                {
                    !showTimeTable && <img onClick={() => setShowTimeTable(!showTimeTable)} loading="lazy" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1" className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0" />
                }

            </div>
            {
                showTimeTable && <DailyTimeTable daysOpen={timings} />
            }

        </div>
    );
}

export default Timings