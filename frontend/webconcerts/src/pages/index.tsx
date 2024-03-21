import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "@/slices/userSlice";

interface LoginFormValues {
  userName: string;
}

const initialValues: LoginFormValues = {
  userName: "",
};

const validationSchema = Yup.object({
  userName: Yup.string().required("Name is required"),
});

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/v1/createUser`,
        { nameUser: values.userName }
      );

      dispatch(setUser(response.data));
      router.push("/homepage");
    } catch (error) {
      console.error("Error creating user:", error);
    }
    setSubmitting(false);
  };


  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 background">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex-col justify-center">
          <div className="bg-white rounded-md overflow-hidden max-w-screen-sm sm:max-w-md p-5 mx-auto">
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              SIGN IN YOUR NAME
            </h2>
            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm ">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="space-y-2" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="userName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <Field
                      id="userName"
                      name="userName"
                      type="text"
                      autoComplete="username"
                      required
                      placeholder="Enter your Name"
                      className="insert-box"
                    />
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <button type="submit" className="signIn-btn">
                    Sign in
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
