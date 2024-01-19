import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  POST_PRODUCT_PROGRSS,
  PUT_PRODUCT_PROGRSS,
} from "../redux-saga/admin/action/action";
import { Box, Button, TextField, Typography } from "@mui/material";

const Data = () => {
  const name = useRef();
  const price = useRef();
  const product = useSelector((state) => state.productReducer);
  const [view, setview] = useState({});

  const dispatch = useDispatch();

  const handalSubmit = () => {
    const data = {
      productName: name.current.value,
      price: price.current.value,
    };
    dispatch({
      type: POST_PRODUCT_PROGRSS,
      payload: data,
    });
  };

  const handal = (e) => {
    setview((view) => ({
      ...view,
      [e.target.name]: e.target.value,
    }));
  };

  const handalUpdate = () => {
    dispatch({ type: PUT_PRODUCT_PROGRSS, payload: view });
  };

  return (
    <>
      <Box m="2.5rem 30rem" border=".1rem solid" borderRadius="1rem">
        <Box m="1rem">
          <Typography variant="h6" textAlign="center" marginBottom="1rem">
            Product List
          </Typography>

          <TextField
            required
            placeholder="Enter your Product Name"
            label="Product Name"
            name="productName"
            inputRef={name}
            value={view.productName || ""}
            onChange={handal}
            sx={{ marginRight: 4 }}
          />
          <TextField
            placeholder="Enter your Product Price"
            label="Product Price"
            name="price"
            inputRef={price}
            value={view.price || ""}
            onChange={handal}
          />
        </Box>
        <Box textAlign="center" mb="2rem">
          <Button variant="contained" onClick={handalSubmit}>
            Submit
          </Button>
          <Button
            variant="contained"
            style={{ margin: "1rem" }}
            onClick={handalUpdate}
          >
            update
          </Button>
        </Box>
      </Box>

      <div className="row">
        {product.product?.map((val, ind) => {
          return (
            <div className="col-4" key={ind}>
              <div class="card mt-5" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{val.productName}</h5>
                  <p class="card-text">{val.price}</p>
                  <button onClick={() => setview(val)}>View</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Data;
