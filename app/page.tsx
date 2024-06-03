"use client";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

export default function Home() {
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;

  const [touched, setTouched] = useState({});
  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };

  return (
    <>
      <div className="p-8">
        <h1
          style={{ color: "#2d334a" }}
          className="mt-2 pl-10 font-bold text-4xl"
        >
          Hi,
        </h1>
        <h1
          style={{ color: "#2d334a" }}
          className="mt-1.5 pl-10 font-bold text-4xl"
        >
          I'm Dicko Evaldo
        </h1>
        <h1
          style={{ color: "#2d334a" }}
          className="mt-1.5 pl-10 font-bold text-4xl"
        >
          A Front End Developer
        </h1>
        <h1 style={{ color: "#2d334a" }} className="mt-8 pl-10 text-xl">
          Fomo is the killer of studies - Alan turing
        </h1>
        {/* <div className="avatar pl-10 mt-10">
          <div className="w-60 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div> */}
        <div className="mt-6 pl-9 flex justify-start gap-5">
          <a
            href="https://www.linkedin.com/in/dicko-evaldo-58a07b244/?trk=opento_sprofile_goalscard"
            target="_blank"
          >
            <LinkedInIcon
              sx={{ fontSize: 50, color: "#2d334a" }}
            ></LinkedInIcon>
          </a>
          <a href="https://github.com/DickoEvaldo" target="_blank">
            <GitHubIcon sx={{ fontSize: 48, color: "#2d334a" }}></GitHubIcon>
          </a>
          <button
            style={{
              backgroundColor: "#ffd803",
              color: "black",
              border: "0px",
            }}
            className="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: "#e3f6f5" }} className="p-8 mt-60 ">
        <h2 style={{ color: "gray" }} className="pl-10 text-xl">
          Introduction
        </h2>
        <h1
          style={{ color: "#2d334a" }}
          className="mt-2 pl-10 font-bold text-4xl"
        >
          About Me
        </h1>
        <h1 style={{ color: "#2d334a" }} className="mt-2 pl-10 text-xl">
          I'm a Computer Science Student at UNSW that is especially interested
          in Web Development, Software Development, Database Management. I have
          several experience with Backend Development using JavaScript,
          Express.js and Java. I learn new skills quickly and able to adapt to
          new environments.
        </h1>

        <h1
          style={{ color: "#2d334a" }}
          className="mt-20 pl-10 font-bold text-4xl"
        >
          My Projects
          <TerminalIcon sx={{ marginLeft: 1, fontSize: 50 }}></TerminalIcon>
        </h1>
        <div className="mt-10 pl-10 grid grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col p-10 bg-white rounded-md justify-between">
            <div style={{ minHeight: "250px", maxHeight: "500px" }}>
              <h1 style={{ color: "#2d334a" }} className="font-bold text-2xl">
                My Fridge
              </h1>
              <h1 style={{ color: "#2d334a" }} className="mt-5 text-xl">
                With every Receipt Scan, MyFridge provides personalized health
                ratings and recommendations tailored to your specific health
                conditions and goals.
              </h1>
            </div>
            <button
              style={{
                backgroundColor: "#ffd803",
                color: "black",
                border: "0px",
              }}
              className="btn w-3/6"
            >
              Live Demo
              <LaunchIcon></LaunchIcon>
            </button>
          </div>
          <div className="flex flex-col p-10 bg-white rounded-md justify-between">
            <div style={{ minHeight: "250px", maxHeight: "500px" }}>
              <h1 style={{ color: "#2d334a" }} className="font-bold text-2xl">
                Portfolio Website
              </h1>
              <h1 style={{ color: "#2d334a" }} className="mt-5 text-xl">
                This comprehensive personal website showcases my professional
                journey, academic achievements, and creative endeavors.
              </h1>
            </div>
            <button
              style={{
                backgroundColor: "#ffd803",
                color: "black",
                border: "0px",
              }}
              className="btn w-3/6"
            >
              Live Demo
              <LaunchIcon></LaunchIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="p-20 mt-12 ">
        <h1 style={{ color: "#2d334a" }} className="font-bold text-4xl">
          Contact Me
        </h1>
        <FormControl
          sx={{ mb: 3 }}
          isRequired
          isInvalid={touched.name && !values.name}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={values.name}
            errorBorderColor="red.300"
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          sx={{ mb: 3 }}
          isRequired
          isInvalid={touched.email && !values.email}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            erorrBorderColor="red.300"
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl sx={{ mb: 3 }} isRequired>
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl sx={{ mb: 3 }} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            type="text"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
        </FormControl>
        <Button
          variant="outline"
          colorScheme="blue"
          disabled={!values.name || !values.email}
          isLoading={isLoading}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
