import axios from "axios";
 
// Export the object containing the method for accessing the random user api
export default {
    getUsers: function() {
      return axios.get("https://randomuser.me/api/?results=200&nat=us");
    },
   
  };