import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { searchAction } from "../../store/actions";

const SearchView = () => {
  const { isLogged } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const history = useHistory();
  const { term } = useParams();
  console.log(term);
  useEffect(() => {
    const searchPath = history.location.search;
    const searchTerm = searchPath.split("?term=").join("").split("&")[0];
    // console.log(searchTerm);
  }, [history]);

  if (!isLogged) {
    return <div>Login to continue</div>;
  }

  if (!data) {
    return <div>no result found</div>;
  }

  return (
    <div>
      {data?.items?.map((item) => {
        return <div>{}</div>;
      })}
    </div>
  );
};

export default SearchView;
