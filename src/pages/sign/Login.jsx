import { Button } from "@mui/material";
import Logo from "../../components/header/Logo";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";

import HeadSign from "./HeadSign";
import SignWith from "./SignWith";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import VisibilityIcon from '@mui/icons-material/Visibility';


const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const Login = () => {

  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <Helmet>
        <style type="text/css">{`
          .login .btn-container {
            display: flex;
            justify-content: center;
        }
        .login .btn-container button {
          border-radius: 3px !important;
          background-color: #000000 !important;
          width: 360px;
          height: 50px;
          transition: 0.2s;
          font-weight: 600;
        
        }
        .login .btn-container button:hover {
          background-color: #091724 !important;
        }
        
          }
        `}</style>
      </Helmet>
      <div className="login">
        <div className="container w-full md:w-[650px] mx-auto my-10 rounded-md flex justify-center flex-col gap-4">
          <Logo />
          <div
            className="box flex justify-center flex-col rounded-sm shadow-sm"
            style={{ background: "var(--main-color-background-css)" }}
          >
            {/*  */}
            <HeadSign />
            {/*  */}
            <div className="body py-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-center"
              >
                <fieldset>
                  <legend className="sr-only">{t("Login Form")}</legend>
                  <div>
                    {/* email start */}
                    <div className="email address p-2">
                      <label
                        htmlFor="email"
                        className="block text-red font-semibold text-sm text-colorText2"
                      >
                        {t("EMAIL ADDRESS")}:
                      </label>



                      <div className="mt-2">
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: regEmail,
                              message: "Invalid email address",
                            },
                          })}
                          type="text"
                          id="email"
                          name="email"
                          className={`block w-[360px] h-[50px] px-2 ring-1 ring-inset ring-gray-400 text-colorText1 bg-mainColorBackground ${errors.email ? "border-red-500" : ""
                            }`}
                        />
                      </div>





                      
                      {errors.email && (
                        <span className="text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    {/* email end */}

                    {/* password start */}
                    <div className="password p-2">
                      <label
                        htmlFor="password"
                        className="block text-red font-semibold text-sm text-colorText2"
                      >
                        {t("PASSWORD")}:
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("password", {
                            required: "Password is required",
                            pattern: {
                              value: regPassword,
                              message: "Invalid password",
                            },
                            minLength: {
                              value: 8,
                              message:
                                "Password must be at least 8 characters long",
                            },
                          })}
                          type="password"
                          id="password"
                          name="password"
                          className={`block w-[360px] h-[50px] px-2 ring-1 ring-inset ring-gray-400 text-colorText1 bg-mainColorBackground ${errors.password ? "border-red-500" : ""
                            }`}
                        />
                        
                      </div>
                      {errors.password && (
                        <span className="text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    {/* password end */}

                    <div className="btn-container">
                      <Button variant="contained" className="btn" type="submit">
                        {t("SIGN IN")}
                      </Button>
                    </div>
                    <div className="forgot-password font-light text-sm text-colorText2 text-center flex justify-center">
                      <Link
                        to={"/forgot-password"}
                        className="p-4 block w-fit text-center"
                      >
                        {t("Forgot password ?")}
                      </Link>
                    </div>
                    <SignWith title={"OR SIGN IN WITH..."} /> 
                  </div>
                </fieldset>
              </form>
            </div>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
