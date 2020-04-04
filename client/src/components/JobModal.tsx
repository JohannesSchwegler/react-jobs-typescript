import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide, {SlideProps} from "@material-ui/core/Slide";
import Chip from "@material-ui/core/Chip";
import { TransitionProps } from '@material-ui/core/transitions';








interface JobProps {
  job: {
    company_logo?: string,
    title?: string,
    company?: string,
    description?: string,
    location?: string,
    url?: string,
    created_at?: Date,
  };
  open: boolean;
  handleClose: () => void;

}

//const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => <Slide direction="up" ref={ref} {...props} />);
const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const JobModal: React.FC<JobProps> = function ({ job, open, handleClose }) {
  if (!job.title) {
    return <div />;
  }


  return (
    <div>
      <Dialog
        open={open}
        //TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {job.title} -{job.company}
          <img className={"detail-logo"} src={job.company_logo} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Chip size="small" label={`from GitHub Pages`} />
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-slide-description"
            dangerouslySetInnerHTML={{ __html: job.description || ""}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <a href={job.url} target="_blank">
            <Button color="primary">Apply</Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default JobModal