import React from "react";
import Heading from "./Heading";
import TopBar from "./TopBar";


// import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
      <header>

        <TopBar />

        <div className="row">
          <div className="col center">
            <Heading />
          </div>
        </div>

      </header>
  );
}

export default Header;
