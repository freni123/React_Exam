import axios from "axios";
import {
  BASE_URL,
  GET_PRODUCT_API,
  POST_PRODUCT_API,
  PUT_PRODUCT_API,
} from "../../constant";

 /* --------------------------------- get api -------------------------------- */
export async function get_product() {
  return axios
    .get(BASE_URL + GET_PRODUCT_API)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

/* -------------------------------- Post api -------------------------------- */
export async function post_product(action) {
  return axios
    .post(BASE_URL + POST_PRODUCT_API, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}


 /* --------------------------------- update api -------------------------------- */
export async function put_product(action) {
  return axios
    .put(BASE_URL + PUT_PRODUCT_API + action.payload.id, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

