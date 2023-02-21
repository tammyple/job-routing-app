import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getJob from "../getJob";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { deepOrange } from "@mui/material/colors";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJob(id);
      setJob(data);
    };
    fetchData();
  }, []);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job?.title}
          </Typography>
          <Divider sx={{ mb: 1 }} />
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
            {job?.description}
          </Typography>

          {job?.skills.slice(0, 4).map((skill) => (
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
            City: {job?.city}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
