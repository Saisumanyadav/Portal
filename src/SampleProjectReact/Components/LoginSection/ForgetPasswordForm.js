import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./LoginComponent.scss";

const ForgetPasswordForm = ({ open, handleClose, closeParentDialog }) => {
  const [email, setEmail] = useState("");
  const [reset, setReset] = useState(false);

  const handleCloseBoth = () => {
    handleClose();
    closeParentDialog();
  };
  const handleReset = () => {
    setEmail("");
    setReset(false);
  };

  return (
    <>
      <Dialog
        className="dialogBox overlay"
        open={open}
        onClose={handleCloseBoth}
        maxWidth="60"
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            // const password = formJson.password;
            console.log(email);
            handleReset();
            handleCloseBoth();
            if (email) {
              setReset(true);
            }
          },
        }}
      >
        <DialogTitle className="loginTitle">Forgot Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setReset(e.target.value !== "");
            }}
          />
        </DialogContent>
        <DialogActions className="Buttons">
          {reset ? (
            <Button className="cancelButton" onClick={handleReset}>
              Reset
            </Button>
          ) : (
            <Button className="cancelButton" onClick={handleClose}>
              Cancel
            </Button>
          )}
          <Button className="submitButton" type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ForgetPasswordForm;
