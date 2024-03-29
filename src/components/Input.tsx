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
  return (
    <div className="container bg-white mb-8 md:m-0 w-full md:w-[24.3rem] rounded-xl flex items-center justify-around shadow focus:shadow-md mt-6">
      <Formik
        validationSchema={Yup.object().shape(validations)}
        initialValues={{
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting, resetForm, }: FormikHelpers<Values>
        ) => {
          const data = new FormData()
          data.append('email', values.email)
            axios({
              method: "post",
              url: process.env.GATSBY_GETFORM_URL,
              data: data
            })
              .then(r => {
                alert("Obrigado pelo interesse! Assim que estiver tudo pronto, você receberá uma notificação por email.");
                resetForm({})
              })
              .catch(r => {
                alert("Ops, ocorreu um erro.");
              })
            setSubmitting(false)
        }}
      >
        {({ isValid, dirty }) => (

          <Form className='container bg-white md:m-0 w-full md:w-[24.3rem] rounded-xl flex items-center justify-around shadow focus:shadow-md'>
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="h-11 rounded-xl w-[65%] md:w-72 pl-4 pr-1 z-0 focus:outline-none"
            />

            <button disabled={!(isValid && dirty)} type='submit' className="h-9 w-24 leading-6 text-[0.75rem] mr-1 text-white rounded-xl bg-[#5E17EB]   text-center disabled:opacity-40">Me notifique</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Input