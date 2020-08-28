import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</BrowserRouter>

// class PortfolioContainer extends Component {
//   state = {
//     currentPage: "Home"
//   };

//   handlePageChange = page => {
//     this.setState({ currentPage: page });
//     //if clicked  swithch page to the clicked one
//   };

//   showCurrentPage = () => {
//     let currentPage;
//     if (this.state.currentPage === "Home") {
//       currentPage = <Home />
//     } else if (this.state.currentPage === "About") {
//       currentPage = <About />

//     } else if (this.state.currentPage === "Blog") {
//       currentPage = <Blog />
//     } else if (this.state.currentPage === "Contact") {
//       currentPage = <Contact />
//     }
//   }

//   render() {
//     //  let currentPage;
//     //  if(this.state(currentPage === "Home"){
//     //    currentPage =<Home/>
//     //  } else if(this.state(currentPage === "About"){
//     //   currentPage =<About/>

//     //  }else if(this.state(currentPage === "About"){
//     //   currentPage =<About/>
//     //  }else if(this.state(currentPage === "About"){
//     //   currentPage =<About/>
//     // }else{

//     // }
//     return (
//       <div>
//         <NavTabs
//           currentPage={this.state.currentPage}
//           handlePageChange={this.handlePageChange}
//         />
//         {this.showCurrentPage()}
//         Based on `this.state.currentPage`, render the appropriate component
//         here.
//       </div>
//     );
//   }
// }

// export default PortfolioContainer;
