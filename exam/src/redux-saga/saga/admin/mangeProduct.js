import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
  POST_PRODUCT_SUCCESS,
  PUT_PRODUCT_ERROR,
  PUT_PRODUCT_SUCCESS,
} from "../../admin/action/action";
import {
  get_product,
  post_product,
  put_product,
} from "../../admin/api/api";
import { call, put } from "redux-saga/effects";

/* ----------------------------- get handle api ----------------------------- */
export function* handle_Get_product_api(action) {
  try {
    const res = yield call(get_product, action);
    const status = res.status;
    const data = res.data;

    if (status === 200) {
      yield put({ type: GET_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: GET_PRODUCT_ERROR, data });
    }
  } catch (error) {
    yield put({ type: GET_PRODUCT_ERROR, error });
  }
}

/* ----------------------------- post handle api ---------------------------- */
export function* handle_Post_product_api(action) {
  try {
    const res = yield call(post_product, action);
    const status = res.status;
    const data = res.data;

    if (status === 200 || status === 201) {
      yield put({ type: POST_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: POST_PRODUCT_ERROR });
    }
  } catch (error) {
    yield put({ type: POST_PRODUCT_ERROR, error });
  }
}

/* ---------------------------- update handle api --------------------------- */
export function* handle_Put_product_api(action) {
  try {
    const res = yield call(put_product, action);
    const status = res.status;
    const data = res.data;

    if (status === 200 || status === 201) {
      yield put({ type: PUT_PRODUCT_SUCCESS, data });
    } else {
      yield put({ type: PUT_PRODUCT_ERROR, data });
    }
  } catch (error) {
    yield put({ type: PUT_PRODUCT_ERROR, error });
  }
}
