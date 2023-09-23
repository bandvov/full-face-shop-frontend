import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      fullWidth
      id="search"
      type="search"
      value={searchTerm}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon style={{ fill: "var(--orange)" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        filter: "box-shadow: 0px 4px 4px 0px #00000040",
        border: "1px solid var(--gray2)",
        color: "var(--black) !important",
        height:"60px",
      }}
    />
  );
}
