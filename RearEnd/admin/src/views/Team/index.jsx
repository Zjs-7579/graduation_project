import React, { Component } from 'react'
import { Table, Space, Modal, Drawer } from "antd";
import {
	EyeOutlined,
	EditOutlined,
	DeleteOutlined,
	ExclamationCircleOutlined,
} from "@ant-design/icons";


const { confirm } = Modal;
export default class Team extends Component {
    data = [
		{
			key: "11",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
			tags: ["nice", "developer"],
		},
		{
			key: "21",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
			tags: ["loser"],
		},
		{
			key: "31",
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
			tags: ["cool", "teacher"],
		},
		{
			key: "12",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
			tags: ["nice", "developer"],
		},
		{
			key: "22",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
			tags: ["loser"],
		},
		{
			key: "32",
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
			tags: ["cool", "teacher"],
		},
		{
			key: "13",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
			tags: ["nice", "developer"],
		},
		{
			key: "23",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
			tags: ["loser"],
		},
		{
			key: "33",
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
			tags: ["cool", "teacher"],
		},
		{
			key: "14",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
			tags: ["nice", "developer"],
		},
		{
			key: "24",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
			tags: ["loser"],
		},
		{
			key: "34",
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
			tags: ["cool", "teacher"],
		},
		{
			key: "15",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
			tags: ["nice", "developer"],
		},
		{
			key: "25",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
			tags: ["loser"],
		},
		{
			key: "35",
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
			tags: ["cool", "teacher"],
		},
	];
	columns = [
		{
			title: "UID",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "??????",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "????????????",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "???????????????????????????",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "????????????",
			key: "tags",
			dataIndex: "tags",
		},
        {
			title: "????????????",
			key: "age",
			dataIndex: "age",
		},
        {
			title: "?????????",
			key: "tags",
			dataIndex: "tags",
		},
		{
			title: "??????",
			key: "action",
			render: (record) => (
				<Space size="middle">
					<EyeOutlined
						onClick={() => {
							this.handleClickLook(record);
						}}
					/>
					<EditOutlined
						onClick={() => {
							this.handleClickEdit(record);
						}}
					/>
					<DeleteOutlined
						onClick={() => {
							this.handleClickDelete(record);
						}}
					/>
				</Space>
			),
		},
	];
	state = {
        visible: false,
		pagination: {
			hideOnSinglePage: true,
			position: ["bottomCenter"],
			//pageSize: 10 ,
			total: 500,
			defaultCurrent: 1,
		},
		loading: false,
	};
	onChange(current) {
		console.log(current);
	};

	handleClickLook(record) {
		this.setState({
            visible: true
        })
	};
	handleClickEdit(record) {
		console.log(record);
	};
	handleClickDelete(record) {
		console.log(record);
		confirm({
			title: "??????",
			icon: <ExclamationCircleOutlined />,
			content: `???????????? ${record.name} ?????????? `,
			okText: "???",
			okType: "danger",
			cancelText: "???",
			onOk() {
				console.log("OK");
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	};
    
    onClose(){
        this.setState({
            visible: false
        })
      };
	render() {
		const { pagination, loading, visible } = this.state;
		return (
			<div className="Mation">
				<Table
					columns={this.columns}
					dataSource={this.data}
					scroll={{ y: 586 }}
					pagination={pagination}
					onChange={this.onChange}
					loading={loading}
				/>


                <Drawer title="Basic Drawer" placement="right" onClose={this.onClose.bind(this)} visible={visible} width="40%">
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
			</div>
		);
	}
}
