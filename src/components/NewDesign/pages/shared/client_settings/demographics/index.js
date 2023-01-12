import React, { useState } from "react";
import DemographicsCard from "./demographics_card";

const DemographicsSettings = () => {
  const ageItems = ["Under 25","25 - 34","35 - 44","45 - 54","55 - 64","65 or over","Prefer not to say"];
  const employmentItems = ["Full time","Part time"];
  const genderItems = ["Female","Male","Non binary","Prefer not to say"];
  const homeItems = ["A dedicated work room or office","A dedicated work area (but not a separate room)","A non-work specific home location (such as a dining table)","Other","I never work from home"];
  const customItems = ["Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item..."];
  const customItems2 = ["Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item...","Custom item..."];

  return (
    <>
      <div className="n__card mt-0">
        <div className="n__body">
          <h3 className="">Demographics</h3>
          <div className="row">

              <DemographicsCard
                title={"Age"}
                enabled={true}
                items={ageItems}
              />

              
              <DemographicsCard
                title={"Employment type"}
                enabled={false}
                items={employmentItems}
              />

              
              <DemographicsCard
                title={"Gender"}
                enabled={true}
                items={genderItems}
              />

              
              <DemographicsCard
                title={"Home Working Setting"}
                enabled={true}
                items={homeItems}
              />

              
              <DemographicsCard
                title={"Important activities"}
                enabled={true}
                items={customItems2}
              />

              
              <DemographicsCard
                title={"Main Work Location"}
                enabled={false}
                items={customItems}
              />

              
              <DemographicsCard
                title={"Presence of Others"}
                enabled={true}
                items={customItems}
              />

              
              <DemographicsCard
                title={"Role"}
                enabled={false}
                items={customItems}
              />

              
              <DemographicsCard
                title={"Time with organisation"}
                enabled={false}
                items={customItems}
              />

          </div>
        </div>
      </div>
    </>
  );
};

export default DemographicsSettings;
