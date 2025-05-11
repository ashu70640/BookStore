import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're Delighted to have you{" "}
            <span className="text-pink-500">here!! </span>:)
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sollicitudin nec augue quis pellentesque. Praesent faucibus, elit eu
            eleifend tincidunt, libero turpis interdum turpis, nec congue ligula
            mauris malesuada massa. Donec sed luctus ipsum, sed varius neque.
            Aliquam euismod efficitur ex non ullamcorper. Vivamus consectetur
            tincidunt lorem, sit amet malesuada nunc. Maecenas sagittis erat
            urna, at tempus ligula efficitur id. Pellentesque vitae dictum
            tellus, ac commodo enim. Fusce tempus consectetur tempus. Donec id
            auctor lectus. Etiam sed tincidunt purus. Sed interdum pellentesque
            pharetra.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
