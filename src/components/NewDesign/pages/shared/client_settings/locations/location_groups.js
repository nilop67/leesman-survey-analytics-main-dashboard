import React from 'react';
import { Space, Table, Button, Input, Switch } from 'antd';

const LocationGroups =({isLocationGroupDrawer, setLocationGroupDrawer})=> {
  



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
        width:"150px"
      },
      {
        title: 'Locations',
        dataIndex: 'locations',
        key: 'locations',
        render: (locations) => (
            <ul className="locations">
              {locations.map((item) => {
      
                return (
                  <li>
                    {item}
                  </li>
                );
              })}
            </ul>
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
                  
                  <button onClick={()=>setLocationGroupDrawer(true)} className="icon__btn"><span className="cxv-settings-l-icn clients_table_drop"></span></button>
                  
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
        lGroupName: 'Location Group Name…',
        locations: ['Location 1…', 'Location 2…', 'Location 3…', 'Location 4…'],
      },
      {
        key: 'AB002',
        lGroupName: 'Location Group Name…',
        locations: ['Location 1…', 'Location 2…', 'Location 3…', 'Location 4…'],
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

export default LocationGroups;