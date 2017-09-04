import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';  // 为generator 使用
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Data extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // var data = this.props.data || [];
        const cellEdit = {
            mode: 'dbclick',
            defaultSortName: 'name',
            defaultSortOrder: 'asc',

        };

        const selectRow = {
            mode: 'checkbox',
            columnWidth: '60px',
            onSelect: this.handleRowSelect
            //selectRow={ selectRow }
        };
        return (
            <BootstrapTable
             data={this.props.data}
             remote={true}
             pagination = {true}
             fetchInfo={ { dataTotalSize: this.props.totalDataSize } }
             options={ { sizePerPage: this.props.sizePerPage,
                                  onPageChange: this.props.onPageChange,
                                  sizePerPageList: [ 5, 10 ],
                                  page: this.props.currentPage,
                                  onSizePerPageList: this.props.onSizePerPageList } }
             selectRow={selectRow}
             tableContainerClass='my-custom-class'
             search hover striped>
               <TableHeaderColumn isKey dataField='id'> ID</TableHeaderColumn>
               <TableHeaderColumn dataField='name' dataSort={ true }> Name</TableHeaderColumn>
               <TableHeaderColumn dataField='assigned_user_id'>sales</TableHeaderColumn>
               <TableHeaderColumn dataField='_acl'>acl</TableHeaderColumn>
               <TableHeaderColumn dataField='sales_stage'>sales_stage</TableHeaderColumn>
               <TableHeaderColumn dataField='date_closed' editable={{ type:'date'}}>date_closed</TableHeaderColumn>
               <TableHeaderColumn dataField='sales_stage'>sales_stage</TableHeaderColumn>
               <TableHeaderColumn dataField='worst_case'>worst_case</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}