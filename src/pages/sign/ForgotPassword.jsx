import Logo from '../../components/header/Logo'
import React from 'react'
import HeadSign from './HeadSign'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SignWith from './SignWith';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const ForgotPassword = () => {
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
        .forgot-password .btn-container {
          display: flex;
          justify-content: center;
      }
      .forgot-password .btn-container button {
        border-radius: 3px !important;
        background-color: #000000 !important;
        width: 360px;
        height: 50px;
        transition: 0.2s;
        font-weight: 600;
      
      }
      .forgot-password .btn-container button:hover {
        background-color: #091724 !important;
      }
      
        }
      `}</style>
    </Helmet>
    <div className="forgot-password">
      <div className="container w-full md:w-[650px] mx-auto my-10 rounded-md flex justify-center flex-col gap-4">
        <Logo />
        <div
          className="box flex justify-center flex-col rounded-sm shadow-sm"
          style={{ background: "var(--main-color-background-css)" }}
        >
          {/*  */}
          <HeadSign />
          {/*  */}
          <div className="info flex justify-center flex-col items-center text-center gap-2 pt-4 px-8 sm:px-28">
            <h3 className='text-xl font-bold tracking-wider'>{t("RESET YOUR PASSWORD")}</h3>
            <p className='text-sm text-colorText2 '>{t("Type in your email address below and we'll send you an email with instructions on how to create a new password")}</p>
          </div>
          <div className="body py-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center"
            >
              <fieldset>
                <legend className="sr-only">Login Form</legend>
                <div>

                       {/* email start */}
                       <div className="email address p-2">
                      <label
                        htmlFor="email"
                        className="block text-red font-semibold text-sm text-colorText2"
                      >
                        {t("EMAIL ADDRESS:")}
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


                  <div className="btn-container">
                    <Button variant="contained" className="btn" type="submit">
                      {t("RESET PASSWORD")}
                    </Button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
     
        </div>
      </div>
    </div>
  </>
  )
}

export default ForgotPassword