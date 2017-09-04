import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';  // 为generator 使用
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Data from './remoteTable';
// import Pace from './pace';
const url = '/sendajax';
var products = [];
var token = '76a4bf32-a9ef-1889-7aea-7f47816c9e2d';


export default class ReJson extends React.Component {
    constructor(props) {
        // Pace.start('50');
        super(props);
        this.state = {
            data: [],
            dataTotalSize: 0,
            sizePerPage: 20,
            currentPage: 1,
            nextPage:0,
        };
    }

    componentDidMount() {
        $.ajax({url,
            type: 'GET',
            dataType: 'JSON',
            data:'favorites=' + true + '&offset='+ 0 + '&token='+ token,
            success: function(data){ 
                this.setState(
                    {
                        data: data.records,
                        dataTotalSize: data.records.length,
                    });
                console.log(this.state.dataTotalSize);
            }.bind(this),
            error:function(reData, textStatus, xOptions) {
                console.log('error' + JSON.stringify(reData) + 'error message : ' + xOptions.message);
            }.bind(this)
        });
    }

    onPageChange(page, sizePerPage) {

        let nexrPageNum = page * sizePerPage;
        const currentIndex = (page - 1) * sizePerPage;
        $.ajax({url,
            type: 'GET',
            dataType: 'JSON',
            data:'favorites=' + true + '&offset='+ nexrPageNum + '&token='+ token,
            success: function(data){
                this.setState(
                    {
                        data: data.records,
                        currentPage: page
                    });
            }.bind(this),
            error:function(reData, textStatus, xOptions) {
                console.log('error' + JSON.stringify(reData) + 'error message : ' + xOptions.message);
            }.bind(this)
        });
    }
    onSizePerPageList(sizePerPage) {

        const currentIndex = (this.state.currentPage - 1) * sizePerPage;
        this.setState({
          data: this.state.data.slice(currentIndex, currentIndex + sizePerPage),
          sizePerPage: sizePerPage
        });
      }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <Data data={this.state.data} 
                dataTotalSize={this.state.dataTotalSize} 
                onPageChange={ this.onPageChange.bind(this) }
                page={this.state.currentPage}
                onSizePerPageList={ this.onSizePerPageList.bind(this) } { ...this.state }
                />
        );
    }
}    


// export default ReJson;