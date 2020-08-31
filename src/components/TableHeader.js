import React, { Component } from "react";
import "../style/style.css";

export default class TableHeader extends Component {
  render() {
    return (
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="heading">
            Photo
          </th>
          <th scope="col">
            <div className="th-inner heading">
              Name
              <span>
                <i
                  onClick={() => this.props.sortHandler()}
                  class={this.props.sortDirection}
                ></i>
              </span>
            </div>

            <div className="fht-cell">
              <div className="filter-control row">
                <input
                  onChange={(e) => this.props.nameChangeHandler(e)}
                  type="text"
                  className="form-control bootstrap-table-filter-control-name search-input"
                ></input>
              </div>
            </div>
          </th>

          <th scope="col">
            <div className="th-inner heading">Email</div>
            <div className="fht-cell">
              <div className="filter-control">
                <input
                  onChange={(e) => this.props.emailChangeHandler(e)}
                  type="text"
                  className="form-control bootstrap-table-filter-control-name search-input"
                ></input>
              </div>
            </div>
          </th>
          <th scope="col">
            <div className="th-inner heading">GitHub</div>
            <div className="fht-cell">
              <div className="filter-control">
                <input
                  onChange={(e) => this.props.githubChangeHandler(e)}
                  type="text"
                  className="form-control bootstrap-table-filter-control-name search-input"
                ></input>
              </div>
            </div>
          </th>
          <th scope="col">
            <div className="th-inner heading">Office</div>
            <div className="fht-cell">
              <div className="filter-control">
                <select
                  onChange={(e) => this.props.officeChangeHandler(e)}
                  className="form-control bootstrap-table-filter-control-price"
                  dir="ltr"
                >
                  <option value="" defaultValue="defaultValue">
                    All
                  </option>
                  <option value="United States">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Denmark">Denmark</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Spain">Spain</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </div>
            </div>
          </th>
          <th scope="col" className="heading">
            Phone
          </th>
        </tr>
      </thead>
    );
  }
}
