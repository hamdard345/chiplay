import { Container, List, ListItem, Typography, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import CircularProgress from "@mui/material/CircularProgress";
/**
 * Actors component
 *
 * @author Noorullah Niamatullah
 */
function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/author"
    )
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const searchAuthors = (value) => {
    const fullname =
      value.first_name.toLowerCase() + " " + value.last_name.toLowerCase();
    return fullname.includes(searchterm.toLowerCase());
  };
  const allAuthors = authors.filter(searchAuthors).map((value, key) => (
    <List key={key}>
      <ListItem>
        {" "}
        <Typography>
          {" "}
          Author : {value.first_name} {value.middle_initial} {value.last_name}
        </Typography>
      </ListItem>
      <Divider />
    </List>
  ));

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h1" color="textPrimary" gutterBottom>
          Authors
        </Typography>
      </Grid>
      <Grid item>
        <Container sx={{ padding: 2 }}>
          <Search searchterm={searchterm} handler={handleSearch} />
        </Container>
      </Grid>
      <Grid item>
        {loading && <CircularProgress />}
        {allAuthors}
      </Grid>
    </Grid>
  );
}

export default AuthorsPage;
