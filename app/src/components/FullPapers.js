import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import PapersAuthor from "./PapersAuthor";
import Search from "./Search";

/**
 * @returns Full track Papers
 * @author Noorullah Niamatullah w18002720
 */
const FullPapers = (props) => {
  const [searchterm, setSearchTerm] = useState("");
  const searchPapers = (value) => {
    const paperDetails =
      value.title.toLowerCase() + " " + value.abstract.toLowerCase();
    return paperDetails.includes(searchterm.toLowerCase());
  };
  const track = "fullpapers";
  const selectFilter = (value) => value.trackShortname.toLowerCase() === track;
  const listOfPapers = props.papers
    .filter(selectFilter)
    .filter(searchPapers)
    .map((value, key) => (
      <Card key={key} sx={{ border: 1, margin: 1 }}>
        <CardContent align="left" key={value.paper_id}>
          <Typography>Paper Title: {value.title}</Typography>
          <Typography>Paper Abstract: {value.abstract}</Typography>
          <Typography>paper Award: {value.award}</Typography>
          <Typography>paper trackShortname: {value.trackShortname}</Typography>
          <PapersAuthor paper_id={value.paper_id} />
        </CardContent>
      </Card>
    ));
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        {" "}
        FullPapers Track Papers
      </Typography>
      <Box align="center" sx={{ padding: 2 }}>
        <Search searchterm={searchterm} handler={handleSearch} />
      </Box>
      {listOfPapers}
    </div>
  );
};

export default FullPapers;
