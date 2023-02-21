import React from "react";
import JobCard from "./JobCard";
import jobs from "../jobs.json";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import PaginationButtons from "./PaginationButtons";

function JobCardsContainer() {
  return (
    <Container>
      <Grid container spacing={2} mt={1}>
        {jobs.slice(0, 5).map((job) => (
          <Grid key={job.id} item xs={12} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <PaginationButtons />
    </Container>
  );
}

export default JobCardsContainer;
