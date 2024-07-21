import React from "react";
import InputBox from "../components/input.component";
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";

const UserAuthform = ({ type }) => {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === "sign-in" ? "welcome back" : "join us today"}
          </h1>
          {type !== "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              icon="fi-rr-user"
              placeholder="Full Name"
            />
          ) : (
            ""
          )}
          <InputBox
            name="Email"
            type="email"
            icon="fi-rr-at"
            placeholder="Email"
          />
          <InputBox
            name="password"
            type="password"
            icon="fi-rr-key"
            placeholder="Password"
          />
          <button className="btn-dark center mt-14" type="submit">
            {type.replace("-", " ")}
          </button>
          <div></div>

          {type === "sign-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have an account ?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                {"Join us today"}
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already a member ?
              <Link to="/signin" className="underline text-black text-xl ml-1">
                {"Sign in here"}
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthform;
