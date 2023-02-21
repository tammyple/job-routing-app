import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useLocation, Link } from "react-router-dom";
import { Chip } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function JobCard({ job }) {
  let location = useLocation();
  const jobSkills = job.skills;

  return (
    <Card
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1 }}>
          {job.title}
        </Typography>
        <Divider sx={{ mb: 1 }} />
        {jobSkills.slice(0, 4).map((skill) => (
          <Chip
            key={`${job.id}-${skill}`}
            label={skill}
            sx={{ bgcolor: deepOrange[700], mr: 0.5, mb: 0.5 }}
          />
        ))}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            mb: 1,
            height: 100,
            overflow: "hidden",
          }}
        >
          {job.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: 2 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "warning.main", color: "text.primary" }}
          size="small"
          component={Link}
          to={`/job/${job.id}`}
          state={{ backgroundLocation: location }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;
