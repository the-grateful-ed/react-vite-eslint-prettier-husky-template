import React from "react";
import { Form } from "react-router-dom"

// library
import {UserPlusIcon} from "@heroicons/react/24/solid"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom.  Start your journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button className="btn btn--dark">
            <span>Create Account</span>

          </button>
        </Form>
      </div>
    </div>
  );
};

export default Intro;
