import axios from "axios";

const url= 'http://localhost:8080/api/users';

export const createuser=(user)=>axios.post(url,{"email_id":user.email});