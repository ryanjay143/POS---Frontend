import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div className='text-accent text-5xl font-bold md:hidden lg:hidden sm:hidden xxs:hidden'>
        <FontAwesomeIcon icon={faClock} className='me-2'/>{time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
