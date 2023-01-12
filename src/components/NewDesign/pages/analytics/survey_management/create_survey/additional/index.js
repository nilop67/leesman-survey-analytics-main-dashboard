import React, { useState } from "react";
import AdditionalModulesTable from "./modules";
import AdditionalPagesTable from "./pages";
import AdditionalQuestionsTable from "./questions";


const AdditionalSettings = () => {

  return (
    <>
      <div className="n__card mt-0">
        <div className="n__body">
          <h3 className="">Additional modules and questions</h3>

          <div className="row">
            <div className="col-lg-4 col_b_r col_b_ll mt-3">
              <span className="card_desc">Selected modules</span>
              <div className="n_table pr__10 center_labels first_not_center second_not_center third_not_center respo">
                <AdditionalModulesTable/>
              </div>
            </div>
            <div className="col-lg-4 col_b_r mt-3">
              <span className="card_desc">Selected pages of <strong>Office</strong> module</span>
              <div className="n_table pr__10 center_labels first_not_center second_not_center third_not_center respo">
                <AdditionalPagesTable/>
              </div>
            </div>
            <div className="col-lg-4 col_b_r col_b_rr mt-3">
              <span className="card_desc">Selected questions of <strong>DEMOGRAPHICS</strong> page</span>
              <div className="n_table pr__10 center_labels first_not_center second_not_center third_not_center respo">
                <AdditionalQuestionsTable/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalSettings;
