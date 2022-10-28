import axios from 'axios';

export const ajax = async (options) =>
  await axios.request(options).then((response) => response.data);

/* 
axios.get('http://webcode.me').then(resp => {console.log(resp.data);});

async () => {
const result = await axios.get(url1);
console.log(result.data[0].name.common);
} */
/* 
({
        axios({
        method: 'get',
        url: url1
      })
        .then(function (response) {
          response.data
        });
})
 */
