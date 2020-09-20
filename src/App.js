import React, {
  Suspense
} from "react";
import "./App.css";
import logo from "./logo.svg";
import {
  useTranslation
} from "react-i18next";

// page uses the hook
function Page() {
  const {
    t
  } = useTranslation();

  return ( <
    div className = 'App' >
    <
    div className = 'row' >
    <
    div className = 'col' >
    <
    div className = 'alert alert-info' > {
      t("title")
    } < /div>{" "} < /
    div > {
      " "
    } <
    /div>{" "} < /
    div >
  );
}

// loading component for suspense fallback
const Loader = () => ( <
  div className = 'App' >
  <
  img src = {
    logo
  }
  className = 'App-logo'
  alt = 'logo' / >
  <
  div > loading... < /div>{" "} < /
  div >
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return ( <
    Suspense fallback = {
      <
      Loader / >
    } >
    <
    Page / >
    <
    /Suspense>
  );
}