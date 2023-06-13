import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletepockemon } from "./UserReducer";
import image from "../assets/image/pokemon icon.png";

const Home = () => {
  const pockemon = useSelector((state) => state.pockemon);
  //console.log(pockemon);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletepockemon({ id: id }));
  };

  return (
    <div className="homepage">
      <div className="container">
        <h1 className="pt-5" style={{ color: "#482121" }}>
          <img
            src={image}
            alt="icon"
            style={{ height: "80px", width: "80px" }}
          />
          &nbsp;
          <i>
            <b>Pokémon List</b>
          </i>
        </h1>
        <Link to="/create" className="btn btn-success my-3">
          Add New Pokémon +
        </Link>

        <div className="row">
          {pockemon.map((list, index) => (
            <div className="col-sm-3 mt-4 pb-4" key={index}>
              <div className="card ">
                <div className="card-body cardbody">
                  <h4 className="card-title">
                    <pr>
                      <i>
                        <b>Pokémon : {list.name}</b>
                      </i>
                    </pr>
                  </h4>
                  <h6 className="card-title">
                    <pr>Height : {list.height}</pr>
                  </h6>
                  <h6 className="card-title">
                    <pr>Weight : {list.weight}</pr>
                  </h6>
                  <h6 className="card-title">
                    <pr>Ability : {list.ability}</pr>
                  </h6>
                  <h6 className="card-title">
                    <pr> Category : {list.category}</pr>
                  </h6>
                  <p className="card-text fifty-chars">{list.description}</p>
                  <div className="d-flex justify-content-center align-item-center">
                    <Link
                      to={`/edit/${list.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(list.id)}
                      className="btn btn-sm btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
