import React from 'react';
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar> Test </Toolbar>

          <Toolbar />
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
