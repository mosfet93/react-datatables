import React, { Component } from "react";

const $ = require("jquery");
$.Datatable = require("datatables.net");

class Tbl extends Component {
  componentDidMount = () => {
    this.$tbl = $(this.tbl);
    this.$tbl.DataTable({
      data: this.props.dataSet,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start date" },
        { title: "Salary" }
      ]
    });
  };

  componentWillUnmount = () => {};

  render() {
    return (
      <div>
        <table
          className="display"
          width="100% "
          ref={el => {
            this.tbl = el;
          }}
        />
      </div>
    );
  }
}

export default Tbl;
