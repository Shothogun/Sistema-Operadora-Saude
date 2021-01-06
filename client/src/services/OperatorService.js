import axios from 'axios';

const url = 'api/operators/';

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
}

export default OperatorService;
