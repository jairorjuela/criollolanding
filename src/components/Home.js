import React, { Fragment } from "react";
import { useMediaQuery } from 'react-responsive'

// desktop components
import Back1 from "./Back1";
import Back2 from "./Back2";
import Back3 from "./Back3";
import Back4 from "./Back4";
import Back5 from "./Back5";
import Back6 from "./Back6";
import Back7 from "./Back7";
import Back8 from "./Back8";
import Back9 from "./Back9";

// mobile components
import Back1Mobile from "./Back1Mobile";
import Back2Mobile from "./Back2Mobile";
import Back3Mobile from "./Back3Mobile";
import Back4Mobile from "./Back4Mobile";
import Back9Mobile from "./Back9Mobile";

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const Home = () => (
    <Fragment>
      <Desktop>
        <Back1 />
        <Back2 />
        <Back3 />
        <Back4 />
        <Back5 />
        <Back6 />
        <Back7 />
        <Back8 />
        <Back9 />
      </Desktop>
      <Tablet>
        <Back1Mobile />
        <Back2Mobile />
        <Back3Mobile />
        <Back4Mobile />
        <Back5 />
        <Back6 />
        <Back7 />
        <Back8 />
        <Back9Mobile />
      </Tablet>
      <Mobile>
        <Back1Mobile />
        <Back2Mobile />
        <Back3Mobile />
        <Back4Mobile />
        <Back5 />
        <Back6 />
        <Back7 />
        <Back8 />
        <Back9Mobile />
      </Mobile>
    </Fragment>
  )

export default Home;
