import axios from "axios";

//delete https://5f65bfe243662800168e6f65.mockapi.io/api/crud/contacts/1

export default axios.create({
  //https://5f65bfe243662800168e6f65.mockapi.io/api/crud/contacts

  baseURL: "https://5f65bfe243662800168e6f65.mockapi.io/api/crud",
});
