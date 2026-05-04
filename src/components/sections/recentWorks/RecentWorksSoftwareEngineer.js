import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
import WorksSubComponentDevOps from "./softwareEngineer/WorksSubComponentDevOps";
import WorksSubComponentHiplade from "./softwareEngineer/WorksSubComponentHiplade";
import WorksSubComponentSheAI from "./softwareEngineer/WorksSubComponentSheAI";
import WorksSubComponentWaiflow from "./softwareEngineer/WorksSubComponentWaiflow";

const RecentWorksSoftwareEngineer = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("hiplade");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      isotope.current.arrange({ filter: ".hiplade" });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* título */}
        <div className="title">Projetos</div>

        {/* filtros */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("hiplade")}`}
            onClick={handleFilterKeyChange("hiplade")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="hiplade" />
              Hiplade
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("sheai")}`}
            onClick={handleFilterKeyChange("sheai")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="sheai" />
              SheAI
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("waiflow")}`}
            onClick={handleFilterKeyChange("waiflow")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="waiflow" />
              Waiflow
            </label>
          </div>          
          <div
            className={`f_btn ${activeBtn("devops")}`}
            onClick={handleFilterKeyChange("devops")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="devops" />
              DevOps
            </label>
          </div>
        </div>

        {/* grid de projetos */}
        <div className="row grid-items border-line-v">
          <div className="col col-d-12 col-t-12 col-m-12 grid-item hiplade border-line-h">
            <WorksSubComponentHiplade />
          </div>
          <div className="col col-d-12 col-t-12 col-m-12 grid-item waiflow border-line-h">
            <WorksSubComponentWaiflow />
          </div>
          <div className="col col-d-12 col-t-12 col-m-12 grid-item sheai border-line-h">
            <WorksSubComponentSheAI />
          </div>
          <div className="col col-d-12 col-t-12 col-m-12 grid-item devops border-line-h">
            <WorksSubComponentDevOps />
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default RecentWorksSoftwareEngineer;
