import React from "react";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import PaginationButtons from "../components/PaginationButtons";
import { Typography } from "@mui/material";

function HomePage() {
  return (
    <Container>
      {jobs.length > 0 ? (
        <>
          <Grid container spacing={2} mt={1}>
            {jobs.slice(0, 5).map((job) => (
              <Grid key={job.id} item xs={12} md={4} lg={3}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
          <PaginationButtons />
        </>
      ) : (
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          No Result
        </Typography>
      )}
    </Container>
  );
}

export default HomePage;
