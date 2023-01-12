import React, { useState } from 'react';
import { Table } from 'antd';
import { arrayMoveImmutable } from 'array-move';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';


  

const data = [
 {
      key: 'BAB001',
      page: 'DEMOGRAPHICS',
      index: 0,
    },
    {
      key: 'BAB002',
      page: 'ACTIVITYQUESTION1',
      index: 1,
    },
    {
      key: 'BAB003',
      page: 'AVERAGETIME',
      index: 2,
    },
    {
      key: 'BAB004',
      page: 'LOCATION',
      index: 3,
    },
    {
      key: 'BAB005',
      page: 'EXTERNALMOBILITY',
      index: 4,
    },
];

const DragHandle = sortableHandle(({ active }) => (
    <span className={`iconx-dehaze grab__table_item ${active && " actived"}`}></span>
));

  const SortableItem = sortableElement((props) => <tr {...props} />);
  const SortableContainer = sortableContainer((props) => <tbody {...props} />);


const AdditionalPagesTable =()=> {


  const [dataSource, setDataSource] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);

  

  const getColumns = () => {
    return [
    {
      title: 'Sort',
      dataIndex: 'sort',
      width: 30,
      className: 'drag-visible',
      render: () => <DragHandle />,
    },
    {
      title: 'Select',
      dataIndex: 'radio',
      width: 50,
      className: 'drag-hidden',
      render: (_, record) => {
        return (
          <div className="action_btns">
              <div className="fixed__btn">
                    <div className="n__form_control">
                        <label className="n__form_label dashboard_radio">
                            <input type="radio" name="pages" value="select" defaultChecked={record.page === "DEMOGRAPHICS"}/>
                            <span className="label-_text"></span>
                            <span className="checkmark"></span>
                        </label>
                    </div>
              </div>
          </div>
        )
      },
    },
    {
      title: 'Selected pages',
      dataIndex: 'page',
      key: 'page',
      className: 'drag-visible',
    },

    {
      title: 'Action',
      key: 'action',
      width:"130px",
      fixed: 'right',
      className: 'drag-hidden',
      render: (_, record) => {
        return (
          <div className="action_btns">
              <div className="fixed__btn">
              
                <button className="icon__btn" title="Delete user"><span className="cxv-delete-l-icn clients_table_drop"></span></button>
                
                {/* <Switch size="small" defaultChecked /> */}
              </div>
          </div>
        )
      },
    },
  ];
};

const merge = (a, b, i = 0) => {
  let aa = [...a];
  return [...a.slice(0, i), ...b, ...aa.slice(i, aa.length)];
};


const onSortEnd = ({ oldIndex, newIndex }) => {
  let tempDataSource = dataSource;

  if (oldIndex !== newIndex) {
    if (!selectedItems.length) {
      let movingItem = tempDataSource[oldIndex];
      tempDataSource.splice(oldIndex, 1);
      tempDataSource = merge(tempDataSource, [movingItem], newIndex);
    } else {
      let filteredItems = [];
      selectedItems.forEach((d) => {
        filteredItems.push(tempDataSource[d]);
      });
      let newData = [];
      tempDataSource.forEach((d, i) => {
        if (!selectedItems.includes(i)) {
          newData.push(d);
        }
      });
      tempDataSource = [...newData];
      tempDataSource = merge(tempDataSource, filteredItems, newIndex);
    }
    setDataSource(tempDataSource);
    setSelectedItems([]);
  }
};

const DraggableContainer = (props) => (
  <SortableContainer
    useDragHandle
    disableAutoscroll
    helperclassName="row-dragging"
    onSortEnd={onSortEnd}
    {...props}
  />
);

const DraggableBodyRow = ({ className, style, ...restProps }) => {
  // function findIndex base on Table rowKey props and should always be a right array index
  const index = dataSource.findIndex(
    (x) => x.index === restProps["data-row-key"]
  );
  return (
    <SortableItem
      index={index}
      {...restProps}
      selected={selectedItems.length}
      onClick={(e) => {
        if (e.ctrlKey || e.metaKey) {
          selectedItems.includes(index)
            ? selectedItems.splice(selectedItems.indexOf(index), 1)
            : selectedItems.push(index);
          setSelectedItems(selectedItems);
        } else {
          setSelectedItems([]);
        }
      }}
    />
  );
};
    


  return (
    <>
    <Table 
		columns={getColumns()} 
		dataSource={dataSource} 
		pagination={false}
		rowKey="index"
		components={{
		  body: {
			wrapper: DraggableContainer,
			row: DraggableBodyRow,
		  },
		}}
		/>
    </>
  )
}

export default AdditionalPagesTable;