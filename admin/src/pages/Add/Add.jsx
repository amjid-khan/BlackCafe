import React, { useState } from "react";
import "./Add.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Burgers",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmintHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("type", data.type);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "",
      });
      setImage(false);
      toast.success(response.data.message)
    } else {
      toast.error(response.data.error)
    }
  };
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmintHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <div className="for-icons">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="preview-img"
                />
              ) : (
                <IoCloudUploadOutline className="upload-icon" />
              )}
            </div>
          </label>
          <input
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            rows="6"
            style={{background : "transparent" , border : "1px solid white" , borderRadius : "10px" , color : "white"} }
            onChange={onChangeHandler}
            value={data.description}
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category">
            <p>Product Category</p>
            <select style={{background : "transparent" , color : "white"}} onChange={onChangeHandler} name="category" required>
              <option value="Burgers">Burgers</option>
              <option value="Rolls">Rolls</option>
              <option value="Pizza">Pizza</option>
              <option value="Sandwiches">Sandwiches</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Soups">Soups</option>
              <option value="Salads">Salads</option>
              <option value="Drinks">Drinks</option>
              <option value="BreakFast">BreakFast</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
