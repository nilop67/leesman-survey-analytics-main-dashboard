import React, { useState } from "react";


const CustomisationsSurveySettings = () => {

  return (
    <>
      <div className="n__card mt-0">
        <div className="n__body">
          <h3 className="">Customisations</h3>
          <span className="card_desc">
            <span className="mark__title">How to use</span>
            <div className="markdown__info">
              <div className="car_d">
                <div className="type"><div className="heading">Headings</div></div>
                <div className="method"># H1## H2### H3</div>
              </div>
              <div className="car_d">
                <div className="type"><div className="italic">Italic</div></div>
                <div className="method">*This text will render italic*</div>
              </div>
              <div className="car_d">
                <div className="type"><div className="bold">Bold</div></div>
                <div className="method">**This text will render bold**</div>
              </div>
              <div className="car_d">
                <div className="type"><div className="block_quote">Blockquote</div></div>
                <div className="method">{"> blockquote"}</div>
              </div>
              <div className="car_d">
                <div className="type"><div className="ordered">1. Ordered List</div></div>
                <div className="method">1. First item   2. Second item   3. Third item</div>
              </div>
              <div className="car_d">
                <div className="type"><div className="unordered">&bull; Unordered List</div></div>
                <div className="method">- First item   - Second item   - Third item</div>
              </div>
              <div className="car_d">
                <div className="type"><div className="link"><a href="https://www.leesmanindex.com/" target="_blank">Link</a></div></div>
                <div className="method">[Link](https://www.leesmanindex.com/)</div>
              </div>
            </div>
          </span>

          <div className="row">
            <div className="col-lg-9 mt-4">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Intro text</span>
                    <textarea type="text" name="name" className="n__form_input" defaultValue='this is intro text...' />
                  </label>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Closing text</span>
                    <textarea type="text" name="name" className="n__form_input" defaultValue='this is closing text...' />
                  </label>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="n__form_control">
                  <label className="n__form_label">
                    <span>Welcome popup</span>
                    <textarea type="text" name="name" className="n__form_input" defaultValue='this is welcome popup...' />
                  </label>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomisationsSurveySettings;
