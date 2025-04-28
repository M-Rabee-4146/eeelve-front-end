// hooks/useCountdown.js
import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { deleteproductbyid } from '../Redux_toolkit/Features/Product';

export default function useCountdown(endTime,id,dispatch) {
  // const dispatch=useDispatch()
  const [Countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleTimerDelete = async (id,dispatch) => {
      console.log(id)
  
        const result = await dispatch(deleteproductbyid(id));
        
        if (deleteproductbyid.fulfilled.match(result)) {
          toast.success('Product deleted');
          // dispatch(getallproducts()); // refresh product list
        } else {
          toast.error(result.payload || 'Failed to delete');
        }
      };

  useEffect(() => {
    if (!endTime) return;
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const distance = end - now;
      
      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({ hours, minutes, seconds });
      } else {
        // Time is up
        setCountdown({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        handleTimerDelete(id,dispatch)

      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return Countdown;
}
