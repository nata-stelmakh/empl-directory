import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    searchUsers: function () {
        return axios.get(BASEURL);

    }
};