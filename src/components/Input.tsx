import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import *  as Yup from 'yup'
import axios from "axios";


interface Values {
  email: string;
}

const validations = {
  email: Yup.string()
    .email("Email invalido")
    .required('Não pode estar em branco'),
}

const Input = () => {
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    axios({
      method: "post",
      url: process.env.GATSBY_GETFORM_URL,
      data: new FormData(form)
    })
    .then(r => {
      alert("Obrigado pelo interesse! Assim que estiver tudo pronto, você receberá uma notificação por email.");
      console.log(r)
      // resetForm({})
    })
    .catch(r => {
      alert("Ops, ocorreu um erro.");
      console.error(r)
    });
  };
  return (
    <div className="container bg-white mb-8 md:m-0 w-full md:w-[24.3rem] rounded-xl flex items-center justify-around shadow focus:shadow-md mt-6">
          <form className='container bg-white md:m-0 w-full md:w-[24.3rem] rounded-xl flex items-center justify-around shadow focus:shadow-md' onSubmit={handleOnSubmit}>
      <input type="email" className="h-11 rounded-xl w-[65%] md:w-72 pl-4 pr-1 z-0 focus:outline-none" placeholder="Email" />
            <button type='submit' className="h-9 w-24 leading-6 text-[0.75rem] mr-1 text-white rounded-xl bg-black   text-center disabled:opacity-40">Me notifique</button>
          </form>
        {/* )} */}
      {/* </Formik> */}
      {/* <input type="email" className="h-11 rounded-xl w-[65%] md:w-72 pl-4 pr-1 z-0 focus:outline-none" placeholder="Email" /> */}
      {/* <button className="h-9 w-24 leading-6 text-[0.75rem] mr-1 text-white rounded-xl bg-black hover:bg-blue-700 text-center">Me notifique</button> */}
    </div>
  )
}

export default Input