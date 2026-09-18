import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Application Development",
          "Mobile App Development",
          "AI Automation",
          "DevOps &amp; CI/CD",
          "VPS Deployment",
          "Payment Gateway Integration",
          "System Design",
          "Cyber Security",
          "API Development",
          "E-Commerce Platforms",
        ],
        autoStart: true,
        loop: true,
        delay: 45,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
