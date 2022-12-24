import React, { useMemo } from 'react';

import Table from 'app/components/table';
import PageHeading from 'app/components/pageHeading';
import useSchedule from 'app/hooks/useSchedule';
import LoadingScreen from 'app/components/loadingScreen';
import { useMediaQuery } from 'app/hooks/useMediaQuery';
import { scheduleDataFilter } from 'app/utils/tableDataFilter';
import { scheduleTableHeader } from 'app/utils/filterTableHeader';

const ScheduleWrapper = () => {
  const isTablet = useMediaQuery('(max-width: 750px) and (min-width: 501px)');
  const isMobile = useMediaQuery('(max-width: 500px)');

  const { isFetch, schedules } = useSchedule();

  const labels = useMemo(() => scheduleTableHeader(isTablet, isMobile), [isTablet, isMobile]);

  const tableData = useMemo(() => scheduleDataFilter(schedules), [schedules]);

  return isFetch ? (
    <LoadingScreen />
  ) : (
    <section>
      <PageHeading title="League Schedule" />
      <Table labels={labels} data={tableData} tableStyle={'odd'} />
    </section>
  );
};

export default ScheduleWrapper;
