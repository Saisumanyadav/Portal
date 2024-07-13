import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./LoginComponent.scss";
import ForgetPasswordForm from "./ForgetPasswordForm";

const LoginComponent = ({ open, handleClose }) => {
  const [reset, setReset] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotOpen, setForgotOpen] = useState(false);

  const handleForgotOpen = () => {
    setForgotOpen(true);
  };

  const handleForgotClose = () => {
    setForgotOpen(false);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setReset(false);
  };

  const closeBothDialogs = () => {
    setForgotOpen(false);
    handleClose();
  };

  return (
    <>
      <Dialog
        className="dialogBox overlay"
        open={open && !forgotOpen}
        onClose={closeBothDialogs}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            const password = formJson.password;
            console.log(email, password);
            handleReset();
            handleClose();
            if (email || password) {
              setReset(true);
            }
          },
        }}
      >
        <DialogTitle className="loginTitle">Login</DialogTitle>
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
          <TextField
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setReset(e.target.value !== "");
            }}
          />
          <div className="linkTags">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create an Account
            </a>
            <Button onClick={handleForgotOpen}>Forgot Password</Button>
          </div>
        </DialogContent>
        <DialogActions className="Buttons">
          {reset ? (
            <Button className="cancelButton" onClick={handleReset}>
              Reset
            </Button>
          ) : (
            <Button className="cancelButton" onClick={closeBothDialogs}>
              Cancel
            </Button>
          )}
          <Button className="submitButton" type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <ForgetPasswordForm
        open={forgotOpen}
        handleClose={handleForgotClose}
        closeParentDialog={closeBothDialogs}
      />
    </>
  );
};

export default LoginComponent;
