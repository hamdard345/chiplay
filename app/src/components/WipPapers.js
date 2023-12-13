import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import PapersAuthor from "./PapersAuthor";
import Search from "./Search";

/**
 *
 * @returns Wip track Papers
 * @author Noorullah Niamatullah w18002720
 */
function WipPapers(props) {
  const [limit, setLimit] = useState(10);
  const [searchterm, setSearchTerm] = useState("");
  const searchPapers = (value) => {
    const paperDetails =
      value.title.toLowerCase() + " " + value.abstract.toLowerCase();
    return paperDetails.includes(searchterm.toLowerCase());
  };
  const track = "wip";
  const selectFilter = (value) => value.trackShortname.toLowerCase() === track;
  const listOfPapers = props.papers
    .slice(0, limit)
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
  const loadMore = () => {
    setLimit(limit + 10);
  };
  return (
    <div>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        {" "}
        Wip Track Papers
      </Typography>
      <Box align="center" sx={{ padding: 2 }}>
        <Search searchterm={searchterm} handler={handleSearch} />
      </Box>
      {listOfPapers}
      {
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: 2 }}
          onClick={loadMore}
        >
          Show More
        </Button>
      }
    </div>
  );
}

export default WipPapers;
