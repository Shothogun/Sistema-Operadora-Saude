import axios from 'axios';

const url = 'http://localhost:5000/api/operators';

class OperatorService {
  static getOperators() {
    return new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        const data = response.data;
        resolve(
          data
        );
      })
      .catch((error) => {
        reject(error);
      })
    });
  }

  static searchOperator(razaoSocial) {
    return axios.get(`${url}/search`, {
      params: {
        razaoSocial: razaoSocial
      }
    })
  }
}

export default OperatorService;
