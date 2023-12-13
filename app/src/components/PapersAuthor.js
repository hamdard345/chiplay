import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AuthorsAffiliation from "./AuthorsAffiliation";
/**
 * @returns PapersAuthor
 * @author Noorullah Niamatullah w18002720
 */
function PapersAuthor(props) {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const fetchAuthors = () => {
    fetch(
      "http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/paperauthor?paper_id=" +
        props.paper_id
    )
      .then((response) => response.json())
      .then((json) => {
        setAuthors(json.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const showAuthors = () => {
    setLoading(true);
    setShowButton(false);
    fetchAuthors();
  };
  const listofAuthors = authors.map((value, key) => (
    <Card key={key}>
      <Typography gutterBottom>
        Author:{value.first_name} {value.middle_initial} {value.last_name}
      </Typography>
      <AuthorsAffiliation
        author_id={value.author_id}
        paper_id={value.paper_id}
      />
    </Card>
  ));
  return (
    <div>
      <Box align="left">
        <Typography>{listofAuthors}</Typography>
        {loading && <Typography>Loadinng...</Typography>}
        {showButton && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginTop: 2 }}
            onClick={showAuthors}
          >
            Show Authors
          </Button>
        )}
      </Box>
    </div>
  );
}

export default PapersAuthor;
