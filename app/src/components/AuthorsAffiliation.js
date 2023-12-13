import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
/**
 *
 * @author Noorullah Niamatullah
 */
function AuthorsAffiliation(props) {
  const [affiliation, setAffiliation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const fetAffiliation = () => {
    fetch(
      "http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/institution?author_id=" +
        props.author_id +
        "&paper_id=" +
        props.paper_id
    )
      .then((response) => response.json())
      .then((json) => {
        setAffiliation(json.data);
        console.log(json);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const showAffiliation = () => {
    setLoading(true);
    setShowButton(false);
    fetAffiliation();
  };
  const listofAffiliation = affiliation.map((value, key) => (
    <Typography key={key}>
      institution:{value.institution} Country:{value.country}
    </Typography>
  ));
  return (
    <div>
      <Typography gutterBottom>Affiliation:</Typography>
      <Typography gutterBottom>{listofAffiliation}</Typography>
      {loading && <Typography>Loadinng...</Typography>}
      {showButton && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: 1 }}
          onClick={showAffiliation}
        >
          Show Affiliation
        </Button>
      )}
    </div>
  );
}

export default AuthorsAffiliation;
