import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addpockemon } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [ability, setAbility] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const pockemon = useSelector((state) => state.pockemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addpockemon({
        id: pockemon[pockemon.length - 1].id + 1,
        name,
        height,
        weight,
        ability,
        category,
        description,
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
        <div className="col-8 offset-2">
          <div className="pt-5">
            <h2>
              <i>
                <b>Add Pokémon</b>
              </i>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="pt-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="pt-3">
                <label htmlFor="height">Height</label>
                <input
                  type="text"
                  name="height"
                  className="form-control"
                  placeholder="Enter Height"
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <div className="pt-3">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  name="weight"
                  className="form-control"
                  placeholder="Enter Weight"
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div className="pt-3">
                <label htmlFor="ability">Ability</label>
                <input
                  type="text"
                  name="ability"
                  className="form-control"
                  placeholder="Enter Ability"
                  onChange={(e) => setAbility(e.target.value)}
                  required
                />
              </div>
              <div className="pt-3">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  name="category"
                  className="form-control"
                  placeholder="Enter Category"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <div className="pt-3">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Enter Description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <br />
              <div className="d-flex justify-content-center align-item-center">
                <button className="btn btn-success">Submit</button>
                <button className="btn btn-primary mx-5" onClick={handleBack}>
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
