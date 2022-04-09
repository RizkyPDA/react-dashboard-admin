import React from "react";
import "./featured.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import AnimatedProgressProvider from "../../../utils/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const percentage = 66;

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <AnimatedProgressProvider valueStart={0} valueEnd={66} duration={5.4} easingFunction={easeQuadInOut} repeat>
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                  styles={buildStyles({
                    pathTransition: "none",
                    strokeLinecap: "butt",
                    textSize: "16px",
                    pathColor: `#E7F9A9, ${percentage / 100})`,
                    textColor: "#3D0814",
                    trailColor: "#BEEE62",
                    backgroundColor: "#E7F9A9",
                    background: true,
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$400</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, enim?</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$15000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$15000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$15000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
