import React, { useState } from "react";

import { Fab, TextField, Alert, Stack, styled } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { InsertLinkOutlined } from "@mui/icons-material";

import { isWebUri } from "valid-url";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "purple",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    backgroundColor: "lightgray",
  },
});

export default function Home() {

  const [userURL, setUserURL] = useState("");
  const [emptyURL, setInvalidStatus] = React.useState(false);

  function handleChange(event) {
    setInvalidStatus(false);
    setUserURL(event.target.value);
  }

  const shortenURL = () => {
    if (userURL === null || userURL === "") {
      //Empty URL, show error alert.
      console.log("No URL to shorten.");
      setInvalidStatus(true);
    } else {
      //URL exists
      let url_formatted = "";
      if (userURL.startsWith("http://") || userURL.startsWith("https://")) {
        //URL format initially correct
        url_formatted = userURL;
        console.log("Input is: " + url_formatted);
      } else {
        //Format correction to be passed to validator.
        url_formatted = "http://" + userURL;
        setUserURL(url_formatted);
        console.log("Input is: " + url_formatted);
      }

      //Validation of valid URL using valid-url npm package
      if (!isWebUri(url_formatted)) {
        //Bad URL, show error alert.
        setInvalidStatus(true);
      } else {
        //Good URL
        console.log("Lookup in DB - " + url_formatted);
        queryRoute(url_formatted);
      }
    }
  };

  const queryRoute = (url) => {
    console.log("Querying route: " + url);
    fetch("/api/checkUrl?queryUrl=" + url)
    .then(response => response.json())
    .then(data => {
      console.log(data.route);
      if(data.route === "UNREGISTERED"){
        //generate new URL for user query
        fetch("/api/compressURL?queryUrl=" + url)
        .then(response2 => response2.json())
        .then(compressedURL => {
          console.log("New code generated: " + compressedURL.route);
          //TO-DO: send compressedURL to front for user feedback of successful process.
        })
      }
      else{
        //return existing URL code data to user

        //TO-DO: send data.route to front for user feedback of successful process.
      }
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Yugnar's URL shortener</title>
        <meta name="description" content="Yugnar's ULR shortener page title" />
        <link rel="icon" href="/yugIcon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Yugnar's <span className={styles.pageTitle}>URL shortener</span>
        </h1>

        <p className={styles.description}>Enter a URL to shorten:</p>

        <CssTextField
          fullWidth
          label="URL"
          id="custom-css-outlined-input"
          value={userURL}
          onChange={handleChange}
        />

        {emptyURL ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">URL cannot be empty or is not valid!</Alert>
          </Stack>
        ) : null}

        <Fab
          variant="extended"
          className={styles.generateButton}
          onClick={shortenURL}
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Generate
        </Fab>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/yugnar" target="_blank">
          Created by Rafael Rojas{" "}
          <span className={styles.logo}>
            <Image src="/yugnar.svg" alt="Yugnar Logo" width={32} height={25} />
          </span>
        </a>
      </footer>
    </div>
  );
}
