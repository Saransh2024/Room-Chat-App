import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
          {/* Built by{" "} */}
          {/* <a href="http://shimon-wosner.vercel.app" target="_blank"> */}
          <a
            href="https://www.linkedin.com/in/saransh-goel-2a344b216/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={{ display: "inline" }} />
            @Saransh
          </a>
        </GridItem>
        <GridItem justifySelf="end">
          <a
            href="https://github.com/Saransh2024"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ display: "inline" }} /> @Saransh
          </a>
        </GridItem>
      </Grid>
    </Box>
  );
}
