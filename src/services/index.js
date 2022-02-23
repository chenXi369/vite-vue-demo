import axios from 'axios';
import qs from 'qs'

function getData() {
  axios({
    url: '/api/calender/year',
    method: 'post',
    data: qs.stringify({
      year: 2020
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlendcoded'
    }
  }).then((res) => {
    return res.data
  })
}

export {
  getData
}