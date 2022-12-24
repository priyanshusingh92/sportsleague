import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSchedules } from 'app/store/slices/schedule';
import useAuth from './useAuth';

const useSchedule = () => {
  const dispatch = useDispatch();
  const [isFetch, setIsFetch] = useState(true);
  const { schedules, total } = useSelector((state) => state.schedule);
  const { accessToken } = useAuth();

  useEffect(() => {
    if (isFetch) {
      dispatch(getSchedules(`Bearer ${accessToken}`));
      setIsFetch(false);
    }
  }, [dispatch, isFetch]);

  return {
    isFetch: isFetch,
    schedules: schedules,
    total: total,
  };
};

export default useSchedule;
