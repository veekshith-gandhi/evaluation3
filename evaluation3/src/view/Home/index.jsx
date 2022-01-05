import { Box } from "@mui/material";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const HomeView = () => {
  const { isLogged } = useSelector((state) => state.auth);
  const history = useHistory();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!isLogged) {
      history.push("/login");
    }
  }, [isLogged]);

  if (!isLogged) {
    return <div>Login to continue</div>;
  }
  return (
    <div>
      <div>
        <Box
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <input
            placeholder="search"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              if (!value.trim()) {
                return alert("value cannot be empty");
              }
              history.push(`/search?term=${value}&page=1`);
            }}
          >
            search
          </button>
        </Box>
      </div>
    </div>
  );
};

export default HomeView;
