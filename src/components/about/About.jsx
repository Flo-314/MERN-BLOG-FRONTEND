import {useEffect, useState} from "react";

import fetchPost from "../../../helperModules/fetchPost";

function About() {
  useEffect(() => {
    fetchPost();
  }, []);

  return <div />;
}

export default About;
