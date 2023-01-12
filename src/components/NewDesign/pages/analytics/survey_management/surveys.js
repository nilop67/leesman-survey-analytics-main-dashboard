import React, { useState, useEffect, useRef, useLayoutEffect, useContext } from 'react';
import { Space, Table, Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { Link, NavLink } from "react-router-dom";
import CustomSelect from '../../../elements/custom_select';
import DeleteModal from '../../../elements/modal_delete';
import LoaderPage from '../../../elements/loader_page';
import BreadcrumbDashboard from '../../../elements/breadcrumb_dashboard';
import TopFilter from '../../../elements/top_filter_dashboard';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../../../context/auth';

const SurveysManagement = () => {
  const dispatch = useDispatch();
  const [surveyType, setSurveyType] = useState(0);
  const { role } = useContext(AuthContext);
  useLayoutEffect(() => {
    document.body.classList.add("temp__class");
  }, []);


  // Table Drop Functions
  const [actionKey, setActionKey] = useState('');
  const isAction = (record) => record.key === actionKey;
  const openDrop = (record) => {
    setActionKey(record.key);
  };
  const ref_surveys_table_drop = useRef();
  useEffect(() => {
    const handleClick = e => {
      if (!e.target.classList.contains('surveys_table_drop')) {
        setActionKey('')
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [setActionKey]);


  const [deleteModal, setDeleteModal] = useState(false);



  const select_items_3 = [
    {
      id: 1,
      options: [
        "Contains",
        "Option 001…",
        "Option 002…",
        "Option 003…",
        "Option 004…",
        "Option 005…",
      ]
    }
  ];

  //   Custom ANT Filter
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <>
        <h3>Show items with a value that:</h3>
        <Input
          ref={searchInput}
          placeholder={`Type...`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        />
        {select_items_3.map((item, i, arr) => (
          <CustomSelect item={item} i={i} arr={arr} key={item.options[i]} />
        ))}

        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          >
            Filter
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
          >
            Clear
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
        </Space>
      </>
    ),
    filterIcon: (filtered) => (
      <i className="cxv-expand-more-l-icn"
        style={{
          color: filtered ? '#4793F8' : "#1E1E1E",
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  //   Custom ANT Filter


  const columns = [
    role === "Leesman Admin" ? {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps('id'),
    } : { className: "d-none" },
    {
      title: 'Code',
      dataIndex: 'key',
      key: 'key',
      ...getColumnSearchProps('key'),
    },
    {
      title: 'Survey',
      dataIndex: 'survey',
      key: 'survey',
      ...getColumnSearchProps('survey'),
    },
    {
      title: 'Agent',
      dataIndex: 'agent',
      key: 'agent',
      ...getColumnSearchProps('agent'),
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
      ...getColumnSearchProps('client'),
    },
    {
      title: 'Building',
      dataIndex: 'building',
      key: 'building',
      ...getColumnSearchProps('building'),
    },
    {
      title: 'Core modules',
      dataIndex: 'coreModules',
      key: 'coreModules',
      ...getColumnSearchProps('coreModules'),
    },
    {
      title: 'Add. modules',
      dataIndex: 'addModules',
      key: 'addModules',
      ...getColumnSearchProps('addModules'),
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      ...getColumnSearchProps('completed'),
    },
    {
      title: 'Response rate',
      dataIndex: 'responseRate',
      key: 'responseRate',
      ...getColumnSearchProps('responseRate'),
    },
    {
      title: 'Start date',
      dataIndex: 'startDate',
      key: 'startDate',
      ...getColumnSearchProps('startDate'),
    },
    {
      title: 'End date',
      dataIndex: 'endDate',
      key: 'endDate',
      ...getColumnSearchProps('endDate'),
    },
    {
      title: 'Lmi',
      dataIndex: 'lmi',
      key: 'lmi',
      ...getColumnSearchProps('lmi'),
    },
    {
      title: 'Action',
      key: 'action',
      width: "80px",
      render: (_, record) => {
        const action = isAction(record);
        return (
          <div className="action_btns">
            <div className={`drop__btn ${action ? " show" : ""} `}>
              <button className="icon__btn" onClick={action ? () => setActionKey('') : () => openDrop(record)}><span ref={ref_surveys_table_drop} className="cxv-action-l-icn surveys_table_drop"></span></button>
              <div className="drop__menu">
                <ul>
                  {surveyType === 0 && <li><button>Survey link</button></li>}
                  <li><Link to="/create-survey">Edit</Link></li>
                  {surveyType === 0 && <li><button>Respondent info</button></li>}
                  {/* <li><Link to="/create-survey">Create new surveys</Link></li> */}
                  {/* <li><button>View in build surveys</button></li> */}
                  {surveyType === 1 && <li><button>Exports</button></li>}
                  {surveyType === 1 && <li><button>Edit Leesman+</button></li>}
                  {surveyType !== 0 && <li><button>Copy</button></li>}
                  {surveyType === 2 && <li><button>Notify agent/client</button></li>}
                  <li><button>View results</button></li>
                  <li><button>Bespoke setup</button></li>
                  {(surveyType === 2 || surveyType === 5) && <li><button onClick={() => setDeleteModal(true)}>Delete</button></li>}
                </ul>
              </div>
            </div>
          </div>
        )
      },
    },
  ];


  const data = [
    {
      id: "0",
      key: 'AB001',
      survey: 'Survey name…',
      agent: 'Agent name…',
      client: 'Client name…',
      building: 'Building X',
      coreModules: '…',
      addModules: '…',
      completed: '70%',
      responseRate: '80%',
      startDate: '01/01/2022',
      endDate: '05/05/2022',
      lmi: '72%',
    },
    {
      id: "1",
      key: 'AB002',
      survey: 'Survey name…',
      agent: 'Agent name…',
      client: 'Client name…',
      building: 'Building X',
      coreModules: '…',
      addModules: '…',
      completed: '70%',
      responseRate: '80%',
      startDate: '01/01/2022',
      endDate: '05/05/2022',
      lmi: '72%',
    },
    {
      id: "2",
      key: 'AB003',
      survey: 'Survey name…',
      agent: 'Agent name…',
      client: 'Client name…',
      building: 'Building X',
      coreModules: '…',
      addModules: '…',
      completed: '70%',
      responseRate: '80%',
      startDate: '01/01/2022',
      endDate: '05/05/2022',
      lmi: '72%',
    },
    {
      id: "3",
      key: 'AB004',
      survey: 'Survey name…',
      agent: 'Agent name…',
      client: 'Client name…',
      building: 'Building X',
      coreModules: '…',
      addModules: '…',
      completed: '70%',
      responseRate: '80%',
      startDate: '01/01/2022',
      endDate: '05/05/2022',
      lmi: '72%',
    },
    {
      id: "4",
      key: 'AB005',
      survey: 'Survey name…',
      agent: 'Agent name…',
      client: 'Client name…',
      building: 'Building X',
      coreModules: '…',
      addModules: '…',
      completed: '70%',
      responseRate: '80%',
      startDate: '01/01/2022',
      endDate: '05/05/2022',
      lmi: '72%',
    },
  ];


  return (
    <>
      <DeleteModal visibleDatasetModal={deleteModal} setDeleteModal={setDeleteModal} />
      <LoaderPage />

      <div className="container-fluid">
        <div className="row clearfix top-info">
          <div className="col-lg-12">
            <BreadcrumbDashboard isShow={false} />
            <h1>Survey management</h1>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12">
            <TopFilter
              // Filter items
              isClosedSurveys={true}
              AllLiveSurveys={true}
            />
          </div>


          <div className="col-lg-12">
            <div className="n_table has__filter">
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SurveysManagement;