import { Button, Drawer, Tree, Space } from 'antd';
import React, { useState } from 'react';



const DrawerTranslations =({isTranslationsDrawer, setTranslationsDrawer, setLanguageDrawer, title})=> {
  

  

  return (
    <>
    <Drawer
        className="filter_drawer small right_filter"
        title=""
        placement={"right"}
        onClose={()=>setTranslationsDrawer(false)}
        visible={isTranslationsDrawer}
        extra={
          <Space>
            <Button onClick={()=>setTranslationsDrawer(false)}>Cancel</Button>
            <Button type="primary" onClick={()=>setTranslationsDrawer(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="n_drawer_body">
            <button onClick={()=>setTranslationsDrawer(false)} className="drawer__close"><span className="cxv-close-l-icn"></span></button>
            

            <h3 className="mb-4">{title}</h3>
            <div className="row">
              <div className="col-lg-12 title_with_button">
                <h5 className="d_sub_title">Translate for selected languages</h5>

                <button onClick={()=>{setLanguageDrawer(true)}} className="new_l"><span className="iconx-plus1"></span> Add new language</button>
              </div>
              <div className="col-lg-12">
                <div className="n__form_divider">
                  <div className="n__divider"></div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Afrikaans</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Amharic</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Swedish</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Chinese (Hong Kong)</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Dutch</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>English (US)</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Greek</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Portuguese (Portugal)</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Spanish(Spain)</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Custom item...</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Custom item...</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Custom item...</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Custom item...</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Custom item...</span>
                    <input type="text" name="name" className="n__form_input" />
                  </label>
                </div>
              </div>




            </div>
        </div>

        <div className="bottom_side">
            <button onClick={()=>setTranslationsDrawer(false)} className="btn-dash outline float-left tt">
                Cancel
            </button>
            <button onClick={()=>setTranslationsDrawer(false)} className="btn-dash dark float-right tt">
                Apply
            </button>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerTranslations;