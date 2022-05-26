import React from "react";
import "./Filter.css";
const Filter = () => {
  const FilterElement = [
    "All",
    "Javascript",
    "PHP",
    "React",
    "Cartoon",
    "Amazing",
    "Great",
    "Commedy",
    "Awesome",
    "Angular",
    "Node",
    "Next",
    "Great",
    'Angular'
    ];

  return (
    <div className="Filter d__flex align__items__center">
      <div className="Filter__container d__flex ">
      
        {FilterElement.map((element,key) => (
          <div className="Filter_item pointer mx-5" key={key}>
            <span>{element}</span>
          </div>
        ))}
        <div className="Filter_navigation_right  pointer mx-5 " >
          <svg
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
            style={{height:"20px", width:"20px"}}
          >
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path
                d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;
