import React, { useMemo } from 'react';

import Table from 'app/components/table';
import PageHeading from 'app/components/pageHeading';
import useSchedule from 'app/hooks/useSchedule';
import { useMediaQuery } from 'app/hooks/useMediaQuery';
import { leaderboardDataFilter } from 'app/utils/tableDataFilter';
import { leaderBoardTableHeader } from 'app/utils/filterTableHeader';

import LeagueService from 'services/LeagueService';

const LeaderboardWrapper = () => {
  const { schedules } = useSchedule();
  const leagueInstance = new LeagueService();

  const isMobile = useMediaQuery('(max-width: 500px)');

  const data = useMemo(() => {
    return leaderboardDataFilter(leagueInstance.getLeaderboard(schedules));
  }, [schedules]);

  const labels = useMemo(() => leaderBoardTableHeader(isMobile), [isMobile]);

  return (
    <section>
      <PageHeading title="League Standings" />
      <Table labels={labels} data={data} />
    </section>
  );
};

export default LeaderboardWrapper;
