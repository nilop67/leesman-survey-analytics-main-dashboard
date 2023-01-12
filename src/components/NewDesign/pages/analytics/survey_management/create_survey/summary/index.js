import React, { useState } from "react";
import { Table } from 'antd';



const SummarySettings = ({
  setMenu,
  setMenuSub,
  isMenu,
  isMenuSub,
  goTop
}) => {

    const columns = [
        {
          title: 'Admin section',
          dataIndex: 'adminSection',
          key: 'adminSection',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: 'Summary',
          dataIndex: 'summary',
          key: 'summary',
          render: (_, { summary }) => (
            <>
              <ul>
                {summary.map(tag => {
                  return (
                      <li>{tag}</li>
                  );
                })}
              </ul>
            </>
          ),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (text) => {
            return (
              <div className="action_btns status">
                  <span className={`cxv-${text === "complete" ? "status-complete-active-l-icn" : "status-complete-l-icn"} `}></span>
                  <span className={`cxv-${text === "cancel" ? "status-incomplete-active-l-icn" : "status-incomplete-l-icn"} `}></span>
              </div>
            )
          },
        },
        {
          title: 'Edit',
          key: 'action',
          render: (_, record) => {
            return (
              <div className="action_btns">
                  <button onClick={()=>{setMenu(record.url);setMenuSub(record.sub_url);goTop()}} className="btn-dash-export">
                      <span className="cxv-edit-l-icn"></span>
                  </button>
              </div>
            )
          },
        },
      ];
      
      
      const data = [
        {
          key: 'AB001',
          adminSection: 'General setup',
          url: 'General setup',
          sub_url: '',
          description: 'Initial general setup',
          summary: ['…', '…'],
          status: "complete",
        },
        {
          key: 'AB002',
          adminSection: 'Demographics',
          url: 'Demographics',
          sub_url: '',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
          summary: ['…', '…'],
          status: "complete",
        },
        {
          key: 'AB003',
          adminSection: 'Departments',
          url: 'Departments',
          sub_url: '',
          description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          summary: ['…', '…'],
          status: "cancel",
        },
        {
          key: 'AB004',
          adminSection: 'Languages',
          url: 'Languages',
          sub_url: 'Locations',
          description: 'Select the languages you would like your survey to appear in',
          summary: ['English (UK)', 'Nederlands (Default)'],
          status: "complete",
        },
        {
          key: 'AB005',
          adminSection: 'Locations',
          url: 'Locations',
          sub_url: '',
          description: 'Details about the locations to be surveyed',
          summary: ['Antwerpen Centraal Stationsgebouw', 'Antwerpen Century Center Offices'],
          status: "cancel",
        },
        {
          key: 'AB006',
          adminSection: 'Additional modules and questions',
          url: 'Additional',
          sub_url: '',
          description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
          summary: ['…', '…'],
          status: "cancel",
        },
        {
          key: 'AB007',
          adminSection: 'Customisations',
          url: 'Customisations',
          sub_url: '',
          description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
          summary: ['…', '…'],
          status: "cancel",
        },
        {
          key: 'AB008',
          adminSection: 'Notifications',
          url: 'Notifications',
          sub_url: '',
          description: 'Excepteur sint occaecat cupidatat non proident.',
          summary: ['…', '…'],
          status: "cancel",
        },
      ];


  return (
    <>
    <div className="n__card hast__table mt-0">
      <div className="n__body">
        <h3 className="">Summary</h3><br/>
        <div className="fixed_infos mb-2">
          <span className="card_desc info">
            <strong><span className="iconx-info-with-circle"></span> Cache info:</strong>
            <span className="text-muted"><b>Updated:</b> 05.09.2022 - 18:20</span>&nbsp;&nbsp;-&nbsp;&nbsp;
            <span className="text-muted"><b>Created:</b> 05.09.2022 - 18:40</span>
          </span>
        </div>

        <div className="row">

          <div className="col-lg-12">
            <div className="n_table respo">
                
                    <Table 
                        columns={columns} 
                        dataSource={data} 
                        pagination={false}/>
                
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default SummarySettings;
