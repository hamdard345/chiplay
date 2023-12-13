import {
  Box,
  Card,
  CardContent,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PapersAuthor from "./PapersAuthor";
import Search from "./Search";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
/**
 *
 * @author Noorullah Niamatullah
 */
function ALLPapers(props) {
  const [limit, setLimit] = useState(10);
  const [searchterm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState("all");

  // value paper information
  const searchPapers = (value) => {
    const paperDetails =
      value.title.toLowerCase() + " " + value.abstract.toLowerCase();
    return paperDetails.includes(searchterm.toLowerCase());
  };

  const selectFilter = (value) =>
    value.award === selectValue || selectValue === "all";

  const listOfPapers = props.papers
    .slice(0, limit)
    .filter(searchPapers)
    .filter(selectFilter)
    .map((value, key) => (
      <Card key={key} sx={{ border: 1, margin: 1 }}>
        <CardContent align="left" key={value.paper_id}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Paper
          </Typography>
          <Typography gutterBottom>Paper Title: {value.title}</Typography>
          <Typography gutterBottom>Paper Abstract: {value.abstract}</Typography>
          <Typography gutterBottom>paper Award: {value.award}</Typography>
          <PapersAuthor paper_id={value.paper_id} />
        </CardContent>
      </Card>
    ));

  //implement pages like next page with priouvs page
  const loadMore = () => {
    setLimit(limit + 10);
  };
  const handleSearch = (term) => {
    setLimit(136);
    setSearchTerm(term);
  };
  const onChangeSelect = (event) => {
    setLimit(136);
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
        {" "}
        All Papers
      </Typography>
      <Box align="center" sx={{ padding: 2 }}>
        <Search searchterm={searchterm} handler={handleSearch} />
      </Box>
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        Select Papers By Award Type
      </Typography>
      <Select id="select" value={selectValue} onChange={onChangeSelect}>
        <MenuItem value="all">All Papers</MenuItem>
        <MenuItem value="true">awarded</MenuItem>
        <MenuItem value={null}>notawarded</MenuItem>
      </Select>

      {props.loading && <CircularProgress />}
      {listOfPapers}
      {!props.loading && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: 2 }}
          onClick={loadMore}
        >
          Show More
        </Button>
      )}
    </div>
  );
}

export default ALLPapers;
