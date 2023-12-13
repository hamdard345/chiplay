import { Divider, Grid, MenuItem, Select, Typography } from "@mui/material";
/**
 * @returns update the award of a paper
 * @author Noorullah Niamatullah w18002720
 */
function UpdateAward(props) {
  const handleSelect = (event) => {
    const formData = new FormData();
    formData.append("award", event.target.value);
    formData.append("paper_id", props.paper.paper_id);

    const token = localStorage.getItem("token");

    fetch(
      "http://unn-w18002720.newnumyspace.co.uk/kf6012/coursework/api/update",
      {
        method: "POST",
        headers: new Headers({ Authorization: "Bearer " + token }),
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((json) => {
        console.log(json);
        props.handleUpdate();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <Grid
      container
      direction="column"
      justify-content="flex-start"
      alignItems="center"
    >
      <Grid item align="left">
        <Typography>Paper Title : {props.paper.title}</Typography>
        <Divider />
      </Grid>
      <Typography>Select Award for this Paper</Typography>
      <Select
        size="small"
        variant="outlined"
        value={props.paper.award}
        onChange={handleSelect}
      >
        <MenuItem value="true">awarded</MenuItem>
        <MenuItem value={null}>notawarded</MenuItem>
      </Select>
    </Grid>
  );
}
export default UpdateAward;
