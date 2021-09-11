import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://www.logyana.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logyana Solutions
        </a>
        <span className="ml-1">&copy; 2021</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Designed & Developed by</span>
        <a
          href="https://www.logyana.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logyana Solutions
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
