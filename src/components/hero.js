import React from "react";

export default ({ data }) => {
  const { single } = data || {};
  if (!single) {
    return (
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h2 className="text-2xl leading-9 font-extrabold text-gray-700 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Recent articles
        </h2>
        <p className="text-lg leading-7 text-gray-500">
          All the latest .savy news, straight and note from the team.
          <br /> Developers supporting developers
        </p>
        <div className="topic">
          <span className="badge badge-light-primary">Application</span>
          <span className="badge badge-light-success">Front End</span>
          <span className="badge badge-light-danger">Infrastructure</span>
          <span className="badge badge-light-warning">Security</span>
          <span className="badge badge-light">Life</span>
          <span className="badge badge-dark">Random</span>
        </div>
      </div>
    );
  }
};
