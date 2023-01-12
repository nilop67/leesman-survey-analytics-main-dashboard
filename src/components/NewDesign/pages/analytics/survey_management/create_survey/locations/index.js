import React from 'react';
import { Table } from 'antd';


const LocationSurveySettings =({
  isLocationSurveyDrawer,
  setLocationSurveyDrawer
})=> {

  const columns = [
    {
      title: '##',
      dataIndex: 'key',
      key: 'key',
      width:"90px"
    },
    {
      title: 'Location group',
      dataIndex: 'locationGroup',
      key: 'locationGroup',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'Workplace name',
      dataIndex: 'workplaceName',
      key: 'workplaceName',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'All occupants invited to survey?',
      dataIndex: 'invitedSurvey',
      key: 'invitedSurvey',
      render: (item) => (
          <span>{item === null ? " - " : item ? "Yes" : "No"}</span>
        ),
    },
    {
      title: 'Assessment type',
      dataIndex: 'assessmentType',
      key: 'assessmentType',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'Survey workplace target population',
      dataIndex: 'targetPopulation',
      key: 'targetPopulation',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'Number of workstations',
      dataIndex: 'numberWorkstations',
      key: 'numberWorkstations',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'Survey reason',
      dataIndex: 'surveyReason',
      key: 'surveyReason',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'Mandate to use the workplace?',
      dataIndex: 'mandateWorkplace',
      key: 'mandateWorkplace',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'Total net internal/usable area',
      dataIndex: 'totalArea',
      key: 'totalArea',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },
    {
      title: 'Number of floors / levels',
      dataIndex: 'numberFloors',
      key: 'numberFloors',
      render: (item) => (
          <span>{item === null ? " - " : item}</span>
        ),
    },


    
    {
      title: 'Action',
      key: 'action',
      width:"130px",
      fixed: 'right',
      render: (_, record) => {
        return (
          <div className="action_btns">
              <div className="fixed__btn">
              
                <button className="icon__btn" title="Delete"><span className="cxv-delete-l-icn clients_table_drop"></span></button>
                <button onClick={()=>setLocationSurveyDrawer(true)} className="icon__btn" title="Edit"><span className="cxv-settings-l-icn clients_table_drop"></span></button>
                
                {/* <Switch size="small" defaultChecked /> */}
              </div>
          </div>
        )
      },
    },
  ];
  

  const data = [
    {
      key: 'AB001',
      locationGroup: 'XXX Group',
      workplaceName: "LONDON",
      invitedSurvey: null,
      assessmentType: null,
      targetPopulation: null,
      numberWorkstations: null,
      surveyReason: null,
      mandateWorkplace: null,
      totalArea: null,
      numberFloors: null,
    },
    {
      key: 'AB002',
      locationGroup: 'XXX Group',
      workplaceName: 'GERMANY',
      invitedSurvey: true,
      assessmentType: 'Pre',
      targetPopulation: 322,
      numberWorkstations: null,
      surveyReason: 'Expansion',
      mandateWorkplace: null,
      totalArea: 40,
      numberFloors: 5,
    },
    {
      key: 'AB003',
      locationGroup: 'XXX Group',
      workplaceName: 'FRANCE',
      invitedSurvey: false,
      assessmentType: 'Standard',
      targetPopulation: 23,
      numberWorkstations: 1,
      surveyReason: 'Contraction',
      mandateWorkplace: 'Mandate to work in the office a certain number of days',
      totalArea: 4,
      numberFloors: 0,
    },
  ];
    


  return (
    <>
    <div className="n__card mt-0">
      <div className="n__body">
        <h3 className="">Selected locations</h3>
        <span className="card_desc">Total: <strong>11 locations</strong></span>
        <div className="row">

          <div className="col-lg-12">
            <div className="n_table pr__10 center_labels first_not_center respo">
                
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
  )
}

export default LocationSurveySettings;