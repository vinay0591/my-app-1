import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatepockemon } from "./UserReducer";

const Update = () => {
  const { id } = useParams();
  const pockemon = useSelector((state) => state.pockemon);
  const existingpockemon = pockemon.filter((f) => f.id == id);
  const { name, height, weight, ability, category, description } =
    existingpockemon[0];
  const [uname, setUname] = useState(name);
  const [uheight, setUheight] = useState(height);
  const [uweight, setUweight] = useState(weight);
  const [uability, setUability] = useState(ability);
  const [ucategory, setUcategory] = useState(category);
  const [udescription, setUdescription] = useState(description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updatepockemon({
        id: id,
        name: uname,
        height: uheight,
        weight: uweight,
        ability: uability,
        category: ucategory,
        description: udescription,
      })
    );
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className=" homepage">
      <div className="container">
        <div className="col-8 offset-2 pt-5">
          <h2>
            <i>
              <b>Update Pokémon</b>
            </i>
          </h2>
          <form onSubmit={handleUpdate}>
            <div className="pt-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                value={uname}
                required
                onChange={(e) => setUname(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <label htmlFor="height">Height</label>
              <input
                type="text"
                name="height"
                className="form-control"
                placeholder="Enter Height"
                value={uheight}
                required
                onChange={(e) => setUheight(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                name="weight"
                className="form-control"
                placeholder="Enter Weight"
                value={uweight}
                required
                onChange={(e) => setUweight(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <label htmlFor="ability">Ability</label>
              <input
                type="text"
                name="ability"
                className="form-control"
                placeholder="Enter Ability"
                value={uability}
                required
                onChange={(e) => setUability(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                className="form-control"
                placeholder="Enter Category"
                value={ucategory}
                required
                onChange={(e) => setUcategory(e.target.value)}
              />
            </div>
            <div className="pt-3">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Enter Description"
                value={udescription}
                required
                onChange={(e) => setUdescription(e.target.value)}
              />
            </div>
            <br />
            <div className="d-flex justify-content-center align-item-center">
              <button className="btn btn-success">Update</button>
              <button className="btn btn-primary mx-5" onClick={handleBack}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
