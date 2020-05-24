import axios from 'axios';

const addUser = (user) =>{
  user.preventDefault();
  let [email, password] = user.currentTarget;
  let userObj = {
    email:email.value,
    password: password.value
  }
  axios.post('/api/user',userObj)
  .then(data => window.location.replace('./login'))
  .catch(err => console.log(err))
}

export default {
  addUser
}