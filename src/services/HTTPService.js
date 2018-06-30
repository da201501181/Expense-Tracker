import axios from "axios";

const BASE_URL = "https://expense-tracker-171998.firebaseio.com/";

/**
 * HTTP service to make API calls.
 * It is a wrapper on Axios.
 */
class HTTPService {
  /**
   * GET method
   * @param  {string} url API URL
   * @param  {Object} [options={}] HTTP options
   * @returns {Promise}
   */
  static get(url, options = {}) {
    return axios
      .get(`${BASE_URL}${url}`, {
        ...options
      })
      .catch(err => Promise.reject());
  }

  /**
   * POST method
   * @param  {string} url API URL
   * @param  {Object} data Request body
   * @param  {Object} [options={}] HTTP options
   * @returns {Promise}
   */
  static post(url, data, options = {}) {
    return axios
      .post(url, data, {
        ...options
      })
      .catch(err => Promise.reject());
  }
}
export default HTTPService;
