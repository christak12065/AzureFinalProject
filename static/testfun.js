function testfun(){
const date = new Date(Date.now());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let x = axios.post('https://prod-36.eastus.logic.azure.com:443/workflows/5f44f911d28a4a7793dace2e98490d5a/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=C9-nLkA2Akoa3VQOW7EzKRcvZ4mp1_FPKzdVCazlGbA', {
    id: self.crypto.randomUUID(),
    month: months[date.getMonth()],
    day: date.getDate(),
    year: date.getFullYear(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  })
  .then(function (response) {
    console.log(response);
    return response.data
  });} 

console.log(x);
