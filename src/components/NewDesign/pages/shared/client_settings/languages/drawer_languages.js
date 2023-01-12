import { Button, Drawer, Tree, Space } from 'antd';
import React, { useState } from 'react';



const DrawerLanguage =({isLanguageDrawer, setLanguageDrawer, title, isSurvey})=> {
  

  

  return (
    <>
    <Drawer
        className="filter_drawer small maxt right_filter"
        title=""
        placement={"right"}
        onClose={()=>setLanguageDrawer(false)}
        visible={isLanguageDrawer}
        extra={
          <Space>
            <Button onClick={()=>setLanguageDrawer(false)}>Cancel</Button>
            <Button type="primary" onClick={()=>setLanguageDrawer(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="n_drawer_body">
            <button onClick={()=>setLanguageDrawer(false)} className="drawer__close"><span className="cxv-close-l-icn"></span></button>
            

            <h3 className="mb-4">{title}</h3>
            
           
            <div className="row">
              
               {!isSurvey && <>
              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Default language</span>
                    <div className="n__form_select">
                      <select name="industry" id="industry">
                        <option value="Option 1...">English (UK)</option>
                        <option value="Option 2...">Option 2...</option>
                        <option value="Option 3...">Option 3...</option>
                      </select>
                      <div className="icn cxv-expand-more-l-icn"></div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="n__form_divider">
                  <div className="n__divider"></div>
                </div>
              </div>
              </>}


              <div className="col-lg-12">
                <h5 className="d_sub_title">All languages</h5>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Afrikaans" value="Afrikaans"/>
                    <span className="label-_text">Afrikaans</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Amharic" value="Amharic"/>
                    <span className="label-_text">Amharic</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Swedish" value="Swedish"/>
                    <span className="label-_text">Swedish</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Chinese (Hong Kong)" value="Chinese (Hong Kong)"/>
                    <span className="label-_text">Chinese (Hong Kong)</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Dutch" value="Dutch"/>
                    <span className="label-_text">Dutch</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="English (US)" value="English (US)"/>
                    <span className="label-_text">English (US)</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Greek" value="Greek"/>
                    <span className="label-_text">Greek</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Portuguese (Portugal)" value="Portuguese (Portugal)"/>
                    <span className="label-_text">Portuguese (Portugal)</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Spanish(Spain)" value="Spanish(Spain)"/>
                    <span className="label-_text">Spanish(Spain)</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Custom item..." value="Custom item..."/>
                    <span className="label-_text">Custom item...</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Custom item..." value="Custom item..."/>
                    <span className="label-_text">Custom item...</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Custom item..." value="Custom item..."/>
                    <span className="label-_text">Custom item...</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Custom item..." value="Custom item..."/>
                    <span className="label-_text">Custom item...</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="n__form_control">
                  <label className="n__form_label dashboard_check">
                    <input type="checkbox" name="Custom item..." value="Custom item..."/>
                    <span className="label-_text">Custom item...</span>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>



            </div>
        </div>

        <div className="bottom_side">
            <button onClick={()=>setLanguageDrawer(false)} className="btn-dash outline float-left tt">
                Cancel
            </button>
            <button onClick={()=>setLanguageDrawer(false)} className="btn-dash dark float-right tt">
                Apply
            </button>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerLanguage;