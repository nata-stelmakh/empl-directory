import React, { Component } from "react";
import API from "../utils/API";
import "../style/style.css";

export default class ResultContainer extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      sortedList: [],
      error: null,
    };
  }

  buildList = (data) => {
    this.setState({
      list: data.data.results,
      sortedList: data.data.results,
    });
    console.log(data.data.results);
  };
  componentDidMount() {
    API.searchUsers().then(this.buildList).catch();
  }
  nameChangeHandler = (e) => {
    console.log(e.target.value);
    console.log(this.state);

    const filtredList = this.state.list.filter(
      (item) =>
        item.name.first.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
          -1 ||
        item.name.last.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
          -1
    );
    this.setState({ sortedList: filtredList });
  };

  emailChangeHandler = (e) => {
    console.log(e.target.value);
    console.log(this.state);

    const filtredList = this.state.list.filter(
      (item) =>
        item.email.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ sortedList: filtredList });
  };

  officeChangeHandler = (e) => {
    console.log(e.target.value);
    console.log(this.state);

    const filtredList = this.state.list.filter(
      (item) =>
        item.location.country
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ sortedList: filtredList });
  };
  githubChangeHandler = (e) => {
    console.log(e.target.value);
    console.log(this.state);

    const filtredList = this.state.list.filter(
      (item) =>
        item.login.username
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ sortedList: filtredList });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="heading">
                Photo
              </th>
              <th scope="col">
                <div className="th-inner heading">Name</div>
                <div className="fht-cell">
                  <div className="filter-control row">
                    <input
                      onChange={(e) => this.nameChangeHandler(e)}
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
                      onChange={(e) => this.emailChangeHandler(e)}
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
                      onChange={(e) => this.githubChangeHandler(e)}
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
                      onChange={(e) => this.officeChangeHandler(e)}
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
          <tbody>
            {this.state.sortedList.length > 0 &&
              this.state.sortedList.map((item) => {
                return (
                  <tr key={item.login.uuid}>
                    <td>
                      <img src={item.picture.medium} alt="employee"></img>
                    </td>
                    <td>{item.name.first + " " + item.name.last}</td>
                    <td>{item.email} </td>
                    <td>{"github.com/" + item.login.username}</td>
                    <td>{item.location.country}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {this.state.error && <h3>{this.state.error}</h3>}
      </div>
    );
  }
}
