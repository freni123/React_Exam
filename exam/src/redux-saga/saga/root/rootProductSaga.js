import {
  GET_PRODUCT_PROGRESS,
  POST_PRODUCT_PROGRSS,
  PUT_PRODUCT_PROGRSS,
} from "../../admin/action/action";
import {
  handle_Get_product_api,
  handle_Post_product_api,
  handle_Put_product_api,
} from "../admin/mangeProduct";
import { takeLatest } from "@redux-saga/core/effects";

/* ---------------------------- get product saga ---------------------------- */
export function* get_product_saga() {
  yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api);
}

/* ---------------------------- post product saga --------------------------- */
export function* post_product_saga() {
  yield takeLatest(POST_PRODUCT_PROGRSS, handle_Post_product_api);
}

/* ---------------------------- update product saga ---------------------------- */
export function* put_product_saga() {
  yield takeLatest(PUT_PRODUCT_PROGRSS, handle_Put_product_api);
}
