import {Flex, Heading, Text, Link, Container} from "@chakra-ui/react";
import {useEffect, useState} from "react";

function About() {
  return (
    <Flex direction={"column"} justify={"center"} minH={"70vh"} padding="20">
      <Heading fontSize={60}>JUST THE FRONT END OF A BLOG USING:</Heading>
      <hr className="strongLine" />

      <Container fontSize={25} fontWeight={500}>
        <Heading>REPOSITORIES:</Heading>
        <ul>
          <li>
            <a href="https://github.com/Flo-314/MERN-BLOG-FRONTEND">THIS FRONTEND</a>
          </li>
          <li>
            <a href="https://github.com/Flo-314/MERN-BLOG-ADMINFRONTEND">FRONTEND FOR ADMINS</a>
          </li>
          <li>
            <a href="https://github.com/Flo-314/MERN-blog-server">BACKEND (REST API)</a>
          </li>
        </ul>
        <Heading marginTop="10"> Technologies:</Heading>
        <Text fontWeight={"black"} marginTop={10}>
          For the Frontend of this blog and the Frontend of the AdminBlog:
        </Text>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Chakra Ui</li>
        </ul>
        <Text fontWeight={"black"} marginTop={10}>
          {" "}
          For the Backend (The rest API):
        </Text>
        <ul>
          <li>Node.js</li>
          <li>Express.JS</li>
          <li>Passport for Authentications</li>
          <li>JWT also for authentications</li>
        </ul>
        <Heading marginTop={10}>Functionalities:</Heading>

        <Text fontWeight={"black"} marginTop={10}>
          Renders Dinamicly
        </Text>
        <ul>
          <li>All The posts ( that are marked to publish === true)</li>
          <li>All the post of X writer</li>
          <li>All the WRiters</li>
          <li>All the post of X category</li>
          <li>specific post</li>
        </ul>

        <Text fontWeight={"black"} marginTop={10}>
          FLOBLOG for admins:
        </Text>
        <ul>
          <li>You can create an account and need to login to generate a JWT</li>

          <li>You can delete Posts</li>
          <li> You can create posts</li>
          <li>You can edit posts and set if you wanna mark the post vor publish</li>
          <li>You can edit your profile</li>
        </ul>

        <Text marginTop={20}>Feel free to give me feedback </Text>
      </Container>
    </Flex>
  );
}

export default About;
