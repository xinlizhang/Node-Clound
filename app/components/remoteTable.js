import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';  // 为generator 使用
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Data extends React.Component {
    constructor(props) {
        super(props);
    }

    enumFormatter(cell, row, enumObject) {
      return enumObject[cell];
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

        const stageType = {
            '01':'01-Noticing',
            '02':'02-Noticed/Identifying',
            '03':'03-Identified/Validating',
            '04':'04-Identified/Validating',
            '05':'05-Qualified/Gaining Agreement',
            '06':'06-Cond Agreed/Closing',
            '07':'07-Cond Agreed/Closing',
            '08':'08-Cond Agreed/Closing',
            '09':'09-No Bid',
            '10':'10-No Bid',
        };

        const regionsFormatter = (cell, row) => (<span>{ (cell || []).join(',') }</span>);

        return (
            <BootstrapTable
             data={this.props.data}
             remote={true}
             pagination = {true}
             fetchInfo={ { dataTotalSize:50 } }
             options={ { sizePerPage: this.props.sizePerPage,
                        hideSizePerPage: true,
                        onPageChange: this.props.onPageChange,
                        page: this.props.currentPage,
                        onSizePerPageList: this.props.onSizePerPageList } }
             selectRow={selectRow}
             cellEdit={cellEdit}
             tableContainerClass='my-custom-class'
             search hover striped>
               <TableHeaderColumn isKey dataField='id'>Opportunity Number</TableHeaderColumn>
               <TableHeaderColumn dataField='account_name'dataSort={ true }>Client Name</TableHeaderColumn>
               <TableHeaderColumn dataField='description' >Description</TableHeaderColumn>
               <TableHeaderColumn dataField='sales_stage' dataFormat={this.enumFormatter } formatExtraData={ stageType } >Sales Stage</TableHeaderColumn>
               <TableHeaderColumn dataField='date_closed' editable={{ type:'date'}}>Decision date</TableHeaderColumn>
               <TableHeaderColumn dataField='amount'>Total Amount</TableHeaderColumn>
               <TableHeaderColumn dataField='assigned_user_name' editable={ false } >Opportunity Owner</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}