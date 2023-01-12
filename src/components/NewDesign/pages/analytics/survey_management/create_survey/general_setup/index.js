import React, { useState } from "react";
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const GeneralSetupSettings = ({setCheckedLoginType, checkedLoginType, isImportExportDrawer, setImportExportDrawer}) => {
  const [checkedStatus, setCheckedStatus] = useState("Demo");

  return (
    <>
      <div className="n__card mt-0">
        <div className="n__body">
          <h3 className="">General setup</h3>
          <div className="row">
            <div className="col-lg-4">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Survey name</span>
                  <input type="text" name="name" className="n__form_input" />
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Organisation name</span>
                  <input type="text" name="name" className="n__form_input" />
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Agent</span>
                  <div className="n__form_select">
                    <select name="industry" id="industry">
                      <option value="Agent">Agent 1...</option>
                      <option value="Agent">Agent 2...</option>
                      <option value="Agent">Agent 3...</option>
                    </select>
                    <div className="icn cxv-expand-more-l-icn"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Core module</span>
                  <div className="n__form_select">
                    <select name="industry" id="industry">
                      <option value="module">Office</option>
                      <option value="module">Home</option>
                      <option value="module">Office + home</option>
                      <option value="module">Retail</option>
                      <option value="module">Student</option>
                      <option value="module">Campus</option>
                    </select>
                    <div className="icn cxv-expand-more-l-icn"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Domains name</span>
                  <input type="text" name="name" className="n__form_input" placeholder="e.g. leesmanindex.com, leesman.co.uk"/>
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Tailored url</span>
                  <input type="text" name="name" className="n__form_input"/>
                </label>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="n__form_control">
                <label className="n__form_label">
                  <span>Minimum respondents for lmi charts (integer)</span>
                  <input type="number" name="name" className="n__form_input"/>
                </label>
              </div>
            </div>
            
            <div className="col-lg-12">
              <div className="n__form_divider">
                <div className="n__divider"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="flex_groups">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_radio">
                    <input type="radio" name="status" value="Demo" onChange={() => setCheckedStatus("Demo")} checked={checkedStatus === "Demo"}/>
                    <span className="label-_text">Demo</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="n__form_control">
                  <label className="n__form_label dashboard_radio">
                    <input type="radio" name="status" value="Live" onChange={() => setCheckedStatus("Live")} checked={checkedStatus === "Live"}/>
                    <span className="label-_text">Live</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
                {checkedStatus === "Live" ? (
                <>
                <div className="n_calendar_select">
                        <RangePicker 
                        format={"DD / MM / YYYY"}
                        getCalendarContainer={triggerNode => {return triggerNode.parentNode;}}/>
                </div>
                </>
                ):<></>}
            </div>

            
            
            <div className="col-lg-12">
              <div className="n__form_divider">
                <div className="n__divider"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <span className="card_desc">Respondents will log in to the survey by using their own email address or unique provided codes.</span>
            </div>
            <div className="col-lg-12">
              <div className="flex_groups">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_radio">
                    <input type="radio" name="login" value="Email" onChange={() => setCheckedLoginType("Email")} checked={checkedLoginType === "Email"}/>
                    <span className="label-_text">Email</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="n__form_control">
                  <label className="n__form_label dashboard_radio">
                    <input type="radio" name="login" value="EmailList" onChange={() => setCheckedLoginType("EmailList")} checked={checkedLoginType === "EmailList"}/>
                    <span className="label-_text">Email with pre uploaded email list</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="n__form_control">
                  <label className="n__form_label dashboard_radio">
                    <input type="radio" name="login" value="EmailPassword" onChange={() => setCheckedLoginType("EmailPassword")} checked={checkedLoginType === "EmailPassword"}/>
                    <span className="label-_text">Email with one time password</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="n__form_control">
                  <label className="n__form_label dashboard_radio">
                    <input type="radio" name="login" value="Referance" onChange={() => setCheckedLoginType("Referance")} checked={checkedLoginType === "Referance"}/>
                    <span className="label-_text">Referance</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="n__form_control">
                  <label className="n__form_label dashboard_radio">
                    <input type="radio" name="login" value="SSO" onChange={() => setCheckedLoginType("SSO")} checked={checkedLoginType === "SSO"}/>
                    <span className="label-_text">SSO</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
                {checkedLoginType === "EmailList" ? (
                <>
                <div className="left__item">
                    <button onClick={()=>setImportExportDrawer(true)} className="n__btn outline icon">
                        Import / Export (Emails)
                        <span className="cxv-export-l-icn"></span>
                    </button>
                </div>
                </>
                ):<></>}
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSetupSettings;
