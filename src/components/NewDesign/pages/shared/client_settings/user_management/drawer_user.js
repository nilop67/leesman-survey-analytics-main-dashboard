import { Button, Drawer, DatePicker, Space } from 'antd';
import React, { useState } from 'react';



const DrawerUser =({isUserDrawer, setUserDrawer, title})=> {

    

  return (
    <>
    <Drawer
        className="filter_drawer small right_filter"
        title=""
        placement={"right"}
        onClose={()=>setUserDrawer(false)}
        visible={isUserDrawer}
        extra={
          <Space>
            <Button onClick={()=>setUserDrawer(false)}>Cancel</Button>
            <Button type="primary" onClick={()=>setUserDrawer(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="n_drawer_body">
            <button onClick={()=>setUserDrawer(false)} className="drawer__close"><span className="cxv-close-l-icn"></span></button>
            

            <h3 className="mb-4">{title}</h3>
            <div className="row">
              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>First name</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Last name</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Email</span>
                    <input type="email" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Role</span>
                    <div className="n__form_select">
                      <select name="industry" id="industry">
                        <option value="Option 1...">Option 1...</option>
                        <option value="Option 2...">Option 2...</option>
                        <option value="Option 3...">Option 3...</option>
                      </select>
                      <div className="icn cxv-expand-more-l-icn"></div>
                    </div>
                  </label>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Department</span>
                    <div className="n__form_select">
                      <select name="industry" id="industry">
                        <option value="Option 1...">Option 1...</option>
                        <option value="Option 2...">Option 2...</option>
                        <option value="Option 3...">Option 3...</option>
                      </select>
                      <div className="icn cxv-expand-more-l-icn"></div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Location</span>
                    <div className="n__form_select">
                      <select name="industry" id="industry">
                        <option value="Option 1...">Option 1...</option>
                        <option value="Option 2...">Option 2...</option>
                        <option value="Option 3...">Option 3...</option>
                      </select>
                      <div className="icn cxv-expand-more-l-icn"></div>
                    </div>
                  </label>
                </div>
              </div>

            </div>
        </div>

        <div className="bottom_side">
            <button onClick={()=>setUserDrawer(false)} className="btn-dash outline float-left tt">
                Cancel
            </button>
            <button onClick={()=>setUserDrawer(false)} className="btn-dash dark float-right tt">
                Apply
            </button>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerUser;