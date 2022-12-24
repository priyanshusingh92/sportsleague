import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from 'app/hooks/useAuth';
import Logo from '../../../assets/images/icon/logo.svg';
import ScheduleIcon from '../../../assets/images/icon/schedule.png';
import LeaderBoardIcon from '../../../assets/images/icon/leaderboard.png';
import './style.sass';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="app-header__container">
      <div className="app-header__logo">
        <Link to="/">
          <img src={Logo} alt="league web logo" />
        </Link>
      </div>
      {isAuthenticated && (
        <div className="app-header__list">
          <Link className="app-header-list__item" to="/schedule">
            <img src={ScheduleIcon} alt="schedule icon" />
            <p>Schedule</p>
          </Link>
          <Link className="app-header-list__item" to="/leaderboard">
            <img src={LeaderBoardIcon} alt="leaderboard icon" />
            <p>Leaderboard</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
