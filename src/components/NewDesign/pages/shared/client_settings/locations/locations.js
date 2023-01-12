import React from 'react';
import { Space, Table, Button, Input, Switch } from 'antd';

const Locations =({deleteModal, setDeleteModal, isLocationDrawer, setLocationDrawer})=> {



    const columns = [
      {
        title: '##',
        dataIndex: 'key',
        key: 'key',
        width:"100px"
      },
      {
        title: 'Location Group Name',
        dataIndex: 'lGroupName',
        key: 'lGroupName',
        width:"100px"
      },
      {
        title: 'Location Name',
        dataIndex: 'lName',
        key: 'lName',
        width:"100px"
      },
      {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
        width:"100px"
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        width:"100px"
      },
      {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        width:"100px"
      },
      {
        title: 'Leesman inside target population',
        dataIndex: 'targetPopulation',
        key: 'targetPopulation',
        width:"100px"
      },
      {
        title: 'Postcode',
        dataIndex: 'postcode',
        key: 'postcode',
        width:"100px"
      },
      {
        title: 'Total Net Interval / Usable Area',
        dataIndex: 'intervalUsable',
        key: 'intervalUsable',
        width:"100px"
      },
      {
        title: 'Defined number of floors',
        dataIndex: 'definedFloors',
        key: 'definedFloors',
        width:"100px"
      },
      {
        title: 'Building style',
        dataIndex: 'buildingStyle',
        key: 'buildingStyle',
        width:"100px"
      },
      {
        title: 'Date of organisation moved in',
        dataIndex: 'dateOrganisation',
        key: 'dateOrganisation',
        width:"100px"
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width:"100px"
      },
      {
        title: 'Number of Floors',
        dataIndex: 'numberFloors',
        key: 'numberFloors',
        width:"100px"
      },
      {
        title: 'Building Location',
        dataIndex: 'buildingLocation',
        key: 'buildingLocation',
        width:"100px"
      },
      {
        title: 'Occupancy Status',
        dataIndex: 'occupancyStatus',
        key: 'occupancyStatus',
        width:"100px"
      },
      {
        title: 'Occupancy Mix',
        dataIndex: 'occupancyMix',
        key: 'occupancyMix',
        width:"100px"
      },
      {
        title: 'Latitude',
        dataIndex: 'latitude',
        key: 'latitude',
        width:"100px"
      },
      {
        title: 'Longitude',
        dataIndex: 'longitude',
        key: 'longitude',
        width:"100px"
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
                  
                  <button onClick={()=>setLocationDrawer(true)} className="icon__btn"><span className="cxv-settings-l-icn clients_table_drop"></span></button>
                  
                  <Switch size="small" defaultChecked />
                </div>
            </div>
          )
        },
      },
    ];
    

    const data = [
      {
        key: 'AB001',
        lGroupName: 'Location Group Name…',
        lName: 'Location Name…',
        region: 'Region Name…',
        country: 'Country Name…',
        city: 'City Name…',
        targetPopulation: 'Target Population…',
        postcode: 'Postcode…',
        intervalUsable: '…',
        definedFloors: '…',
        buildingStyle: '…',
        dateOrganisation: '…',
        address: '…',
        numberFloors: '…',
        buildingLocation: '…',
        occupancyStatus: '…',
        occupancyMix: '…',
        latitude: '…',
        longitude: '…',
      },
      {
        key: 'AB002',
        lGroupName: 'Location Group Name…',
        lName: 'Location Name…',
        region: 'Region Name…',
        country: 'Country Name…',
        city: 'City Name…',
        targetPopulation: 'Target Population…',
        postcode: 'Postcode…',
        intervalUsable: '…',
        definedFloors: '…',
        buildingStyle: '…',
        dateOrganisation: '…',
        address: '…',
        numberFloors: '…',
        buildingLocation: '…',
        occupancyStatus: '…',
        occupancyMix: '…',
        latitude: '…',
        longitude: '…',
      },
    ];
    


  return (
    <>
        <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false}/>
    </>
  )
}

export default Locations;