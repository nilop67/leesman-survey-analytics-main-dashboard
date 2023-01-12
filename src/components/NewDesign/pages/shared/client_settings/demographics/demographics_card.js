import React, { useState } from "react";
import { Switch } from 'antd';

const DemographicsCard = ({title, enabled, items}) => {

  return (
    <>
        <div className="col-lg-4 col-md-12">
            <div className="card_block">
                <div className="info">
                    <Switch size="small" defaultChecked={enabled} />
                    <button className="icon__btn demog mr-4" title="Delete">
                        <span className="cxv-delete-l-icn"></span>
                    </button>
                    <h4 className="sub_title">{title}</h4>
                </div>

                <div className="items">
                    <ul>
                        {items.map((option, index) => (
                            <li>
                                <div className="n__form_control">
                                    <label className="n__form_label dashboard_check">
                                        <input type="checkbox" name={option} value={option}/>
                                        <span className="label-_text">{option}</span>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
};

export default DemographicsCard;
