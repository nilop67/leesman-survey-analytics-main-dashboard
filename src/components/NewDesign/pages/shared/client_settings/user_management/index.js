import React from 'react';
import { Table } from 'antd';


const UserManagementSettings =({
  isUserDrawer,
  setUserDrawer})=> {

  const columns = [
    {
      title: '##',
      dataIndex: 'key',
      key: 'key',
      width:"90px"
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Enabled',
      dataIndex: 'enabled',
      key: 'enabled',
      render: (item) => (
        <div className="n__form_control">
          <label className="n__form_label dashboard_check without__text">
            <input type="checkbox" name="value" value="value" defaultChecked={item}/>
            <span className="checkmark"></span>
          </label>
        </div>
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
                
                <button className="icon__btn" title="Anonymize user"><span className="cxv-hide-l-icn clients_table_drop"></span></button>
                <button className="icon__btn" title="Delete user"><span className="cxv-delete-l-icn clients_table_drop"></span></button>
                <button onClick={()=>setUserDrawer(true)} className="icon__btn" title="Edit user"><span className="cxv-settings-l-icn clients_table_drop"></span></button>
                
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
      client: 'Client Name…',
      email: 'Email Name…',
      firstName: 'First Name…',
      lastName: 'Last Name…',
      department: 'Department Name…',
      location: 'Location Name…',
      role: 'Role Name…',
      enabled: true,
      
    },
    {
      key: 'AB002',
      client: 'Client Name…',
      email: 'Email Name…',
      firstName: 'First Name…',
      lastName: 'Last Name…',
      department: 'Department Name…',
      location: 'Location Name…',
      role: 'Role Name…',
      enabled: true,
    },
    {
      key: 'AB003',
      client: 'Client Name…',
      email: 'Email Name…',
      firstName: 'First Name…',
      lastName: 'Last Name…',
      department: 'Department Name…',
      location: 'Location Name…',
      role: 'Role Name…',
      enabled: false,
    },
    {
      key: 'AB004',
      client: 'Client Name…',
      email: 'Email Name…',
      firstName: 'First Name…',
      lastName: 'Last Name…',
      department: 'Department Name…',
      location: 'Location Name…',
      role: 'Role Name…',
      enabled: true,
    },
    {
      key: 'AB005',
      client: 'Client Name…',
      email: 'Email Name…',
      firstName: 'First Name…',
      lastName: 'Last Name…',
      department: 'Department Name…',
      location: 'Location Name…',
      role: 'Role Name…',
      enabled: false,
    },
  ];
    


  return (
    <>
    <div className="n__card mt-0">
      <div className="n__body">
        <h3 className="">User management</h3>
        <span className="card_desc">Total: <strong>11 users</strong></span>
        <div className="row">

          <div className="col-lg-12">
            <div className="n_table center_labels first_not_center second_not_center respo">
                
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

export default UserManagementSettings;