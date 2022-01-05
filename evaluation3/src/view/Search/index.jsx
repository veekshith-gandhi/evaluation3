import { Box, Button, Pagination } from "@mui/material";
import { margin } from "@mui/system";
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
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const searchPath = history.location.search;
    const query = new URLSearchParams(searchPath);
    setTerm(query.get("term"));

    setPage(parseInt(query.get("page")));
  }, [history]);

  useEffect(() => {
    searchAction(term, page)(dispatch);
  }, [term, page, dispatch]);

  if (!isLogged) {
    return <div>Login to continue</div>;
  }

  if (!data) {
    return <div>no result found</div>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {data?.items?.map((item) => {
        return (
          <div>
            <h3>{item.full_name}</h3>
            <p>{item.description}</p>
            <hr />
          </div>
        );
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            setPage(page - 1);
            history.push(`/search?term=${term}&page=${page}`);
          }}
          disabled={page == 1}
          variant="contained"
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            setPage(page + 1);
            history.push(`/search?term=${term}&page=${page}`);
          }}
          variant="outlined"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SearchView;
