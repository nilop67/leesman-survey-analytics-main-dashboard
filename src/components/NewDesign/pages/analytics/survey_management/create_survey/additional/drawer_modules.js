import { Button, Drawer, Tree, Space } from 'antd';
import React, { useState } from 'react';



const DrawerModules =({isModulesDrawer, setModulesDrawer, title})=> {

  const [expandedKeys, setExpandedKeys] = useState(['office', 'Leesman 3rd Space Module', 'Leesman Alignment Module']);
  const [checkedKeys, setCheckedKeys] = useState(['office', 'Leesman 3rd Space Module', 'Leesman Alignment Module']);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };




  const treeData = [
    {
      title: 'office',
      key: 'office',
    },
    {
      title: 'home',
      key: 'home',
    },
    {
      title: 'office + home',
      key: 'office + home',
    },
    {
      title: 'Leesman 3rd Space Module',
      key: 'Leesman 3rd Space Module',
    },
    {
      title: 'Leesman Alignment Module',
      key: 'Leesman Alignment Module',
    },
    {
      title: 'Leesman Days in Workplace Module',
      key: 'Leesman Days in Workplace Module',
    },
  ];
  

  

  return (
    <>
    <Drawer
        className="filter_drawer small maxt right_filter"
        title=""
        placement={"right"}
        onClose={()=>setModulesDrawer(false)}
        visible={isModulesDrawer}
        extra={
          <Space>
            <Button onClick={()=>setModulesDrawer(false)}>Cancel</Button>
            <Button type="primary" onClick={()=>setModulesDrawer(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="n_drawer_body">
            <button onClick={()=>setModulesDrawer(false)} className="drawer__close"><span className="cxv-close-l-icn"></span></button>
            

            <h3 className="mb-4">{title}</h3>
            <div className="row">
              <div className="col-lg-12">
                <h5 className="d_sub_title">All modules</h5>
              </div>
              <div className="col-lg-12">
                <div className="n__form_divider">
                  <div className="n__divider"></div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="n_input_control has_icon in_drawer_small">
                      <span className="cxv-search-l-icn icn"></span>
                      <input 
                      placeholder="Search..." 
                      type="text" 
                      className="n_input"
                      id="find-box"
                      ></input>
                </div>
              </div>


              <div className="col-lg-12">
                  <Tree
                    checkable
                    onExpand={onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onCheck={onCheck}
                    checkedKeys={checkedKeys}
                    onSelect={onSelect}
                    selectedKeys={selectedKeys}
                    treeData={treeData}
                  />
              </div>



            </div>
        </div>

        <div className="bottom_side">
            <button onClick={()=>setModulesDrawer(false)} className="btn-dash outline float-left tt">
                Cancel
            </button>
            <button onClick={()=>setModulesDrawer(false)} className="btn-dash dark float-right tt">
                Apply
            </button>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerModules;