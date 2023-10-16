import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieModal = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="printgoCookies"
      style={{
        background: "#fff",
        color: "black",
        fontSize: "1.2rem",
        display: "block",
      }}
      buttonStyle={{
        color: "#fff",
        backgroundColor: "black",
        fontSize: "1em",
        borderRadius: "0.5em",
        padding: "0.7em 1.25em",
        width: "45%",
      }}
      expires={150}
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          // triggered if user scrolls past threshold
          alert("Accept was triggered by user scrolling");
        } else {
          alert("Accept was triggered by clicking the Accept button");
        }
      }}
      enableDeclineButton
      onDecline={() => {
        alert("nay!");
      }}
      declineButtonStyle={{
        color: "#000",
        backgroundColor: "#fff",
        fontSize: "1em",
        borderRadius: "0.5em",
        padding: "0.7em 1.25em",
        width: "45%",
      }}
    >
      <h1 style={{ margin: 0 }}>Hello World</h1>
      <p>This website uses cookies to enhance the user experience.</p>
    </CookieConsent>
  );
};

export default CookieModal;
