"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import useFirebaseAuth from "@/shared/hooks/firebase/useFirebaseAuth";
import useUsers from "@/shared/hooks/firebase/useUsers";
import withNotifications from "@/shared/hoc/withNotifications";

const SignUp = ({ notify }) => {
  const router = useRouter();
  const { register } = useFirebaseAuth();
  const { addUser } = useUsers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await register(email, password);
      await addUser({ name, uid: response.user.uid });
      router.push("/home");
    } catch (err) {
      notify(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          maxWidth: { lg: "1100px", xs: "100%" },
          borderRadius: 2,
          maxHeight: "650px",
          overflow: "hidden",
          margin: "auto",
          border: { xs: 0, lg: 1 },
          borderColor: { lg: "grey.400", xs: "transparent" },
        }}
      >
        <Box
          sx={{
            flex: "55%",
            background:
              "linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)",
            minHeight: "550px",
            display: { xs: "none", lg: "inline-flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "420px" }}>
            <Typography variant="h4" mb={4} color="white">
              Join Now and Let Your Words Roam Free!
            </Typography>
            <Typography paragraph mb={2} fontSize={18} color="white">
              Embark on a journey of seamless connections and vibrant
              conversations! Sign up now to our web chat app and dive into a
              world where communication knows no bounds.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "45%",
            // maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <Typography variant="h5" mb={3} color="secondary.dark">
            Register now to ChatHub
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, maxWidth: "400px" }}
          >
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Register
            </Button>
            <Box>
              <Link href="/" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default withNotifications(SignUp);
