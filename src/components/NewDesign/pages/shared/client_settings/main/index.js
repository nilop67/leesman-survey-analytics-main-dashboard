import React, { useState } from "react";

const MainSettings = ({
  clientName,
  setClientName,
  clientRefNo,
  setClientRefNo,
  website,
  setWebsite,
  checkedInside,
  setCheckedInside,
  checkedFeedbacks,
  setCheckedFeedbacks,
  checkedQuestions,
  setCheckedQuestions,
  checkedXp,
  setCheckedXp
}) => {

  return (
    <>
      <div className="n__card mt-0">
        <div className="n__body">
          <h3 className="">Main</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Client name *</span>
                  <input type="text" name="name" value={clientName} onChange={e => setClientName(e.target.value)} className="n__form_input" required />
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Client Ref No *</span>
                  <input type="text" name="name" value={clientRefNo} onChange={e => setClientRefNo(e.target.value)} className="n__form_input" requiredks />
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Website</span>
                  <input type="text" name="name" value={website} onChange={e => setWebsite(e.target.value)} className="n__form_input" />
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Client industry *</span>
                  <div className="n__form_select">
                    <select name="industry" id="industry">
                      <option value="Accounting">Accounting</option>
                      <option value="Airlines & Aviation">Airlines & Aviation</option>
                      <option value="Alternative Dispute Resolution">Alternative Dispute Resolution</option>
                      <option value="Alternative Medicine">Alternative Medicine</option>
                    </select>
                    <div className="icn cxv-expand-more-l-icn"></div>
                  </div>
                </label>
              </div>
            </div>
            {checkedInside && (
              <div className="col-lg-3">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Question validity period (days)</span>
                    <input type="url" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>
            )}
            <div className="col-lg-12">
              <div className="n__form_divider">
                <div className="n__divider"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="flex_groups">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Inside" value={checkedInside} onChange={() => setCheckedInside(!checkedInside)} />
                    <span className="label-_text">Inside</span>
                    <span className="checkmark"></span>
                  </label>
                </div>

                {checkedInside && (
                  <>
                    <div className="horizontal__divider"></div>
                    <div className="n__form_control">
                      <label className="n__form_label dashboard_check">
                        <input type="checkbox" name="Feedbacks" value={checkedFeedbacks} onChange={() => setCheckedFeedbacks(!checkedFeedbacks)} />
                        <span className="label-_text">Feedbacks</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="n__form_control">
                      <label className="n__form_label dashboard_check">
                        <input type="checkbox" name="Questions" value={checkedQuestions} onChange={() => setCheckedQuestions(!checkedQuestions)} />
                        <span className="label-_text">Questions</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="n__form_control">
                      <label className="n__form_label dashboard_check">
                        <input type="checkbox" name="Xp" value={checkedXp} onChange={setCheckedXp} />
                        <span className="label-_text">Xp</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSettings;
