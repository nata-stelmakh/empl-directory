import React, { Component } from "react";
import TableHeader from "./TableHeader";
import API from "../utils/API";
import "../style/style.css";

export default class ResultContainer extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      sortedList: [],
      sortOrder: true,
      error: null,
    };
  }

  buildList = (data) => {
    this.setState({
      list: data.data.results,
      sortedList: data.data.results,
      sortDirection: "fas fa-sort-up",
    });
    console.log(data.data.results);
  };
  componentDidMount() {
    API.searchUsers().then(this.buildList).catch();
  }

  sortHandlerName = (e) => {
    const sortedList = this.state.sortedList.sort((a, b) => {
      if (this.state.sortOrder === true) {
        return a.name.last.localeCompare(b.name.last);
      } else {
        return b.name.last.localeCompare(a.name.last);
      }
    });
    const direction = this.state.sortOrder
      ? "fas fa-sort-down"
      : "fas fa-sort-up";
    this.setState({
      sortedList: sortedList,
      sortOrder: !this.state.sortOrder,
      sortDirection: direction,
    });
  };

  sortHandlerEmail = (e) => {
    const sortedList = this.state.sortedList.sort((a, b) => {
      if (this.state.sortOrder === true) {
        return a.email.localeCompare(b.email);
      } else {
        return b.email.localeCompare(a.email);
      }
    });
    const direction = this.state.sortOrder
      ? "fas fa-sort-down"
      : "fas fa-sort-up";
    this.setState({
      sortedList: sortedList,
      sortOrder: !this.state.sortOrder,
      sortDirection: direction,
    });
  };

  nameChangeHandler = (e) => {
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
    const filtredList = this.state.list.filter(
      (item) =>
        item.email.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ sortedList: filtredList });
  };

  officeChangeHandler = (e) => {
    const filtredList = this.state.list.filter(
      (item) =>
        item.location.country
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ sortedList: filtredList });
  };
  githubChangeHandler = (e) => {
    const filtredList = this.state.list.filter(
      (item) =>
        item.login.username
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) !== -1
    );
    this.setState({ sortedList: filtredList });
  };

  // filterTable = (value, column) => {
  //   const filtredList = this.state.list.filter((item) => {
  //     if (column === "name") {
  //       return (
  //         item.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
  //         item.name.last.toLowerCase().indexOf(value.toLowerCase()) !== -1
  //       );
  //     } else if (column === "email") {
  //       return item.email.toLowerCase().indexOf(value.toLowerCase()) !== -1;
  //     } else if (column === "github") {
  //       return (
  //         item.login.username.toLowerCase().indexOf(value.toLowerCase()) !== -1
  //       );
  //     } else if (column === "office") {
  //       return (
  //         item.location.country.toLowerCase().indexOf(value.toLowerCase()) !==
  //         -1
  //       );
  //     } else {
  //       return true;
  //     }
  //   });
  //   this.setState({ sortedList: filtredList });
  // };
  render() {
    return (
      <div>
        <table className="table">
          <TableHeader
            sortHandlerName={this.sortHandlerName}
            sortHandlerEmail={this.sortHandlerEmail}
            sortDirection={this.state.sortDirection}
            nameChangeHandler={this.nameChangeHandler}
            emailChangeHandler={this.emailChangeHandler}
            githubChangeHandler={this.githubChangeHandler}
            officeChangeHandler={this.officeChangeHandler}
          />

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
