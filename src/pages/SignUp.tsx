// import { Link} from "react-router-dom"
import { ArrowRight } from "lucide-react";
import { CustomApiHandlePost } from "../controllers/CustomApiHandlePost";
import React, { useState } from "react";
import { useForm } from "react-hook-form"

export default function SignUpThree() {
  const [response, setResponse] = useState({ message: "", statusCode: false,data:{},success:false });
  
  const [formdata, setFormData] = useState({
    email: "",
    fullname: "",
    sponsorId: "",
    password: "",
    transactionPin: "",
  });

  // form validation hooks
  const  {register,handleSubmit,formState:{errors}} = useForm()



  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((preValue) => {
      return { ...preValue, [e.target.name]: [e.target.value] };
    });
  };


  const onSubmit = () => {
    // event.preventDefault();
    const FormData = {
      email: formdata.email[0],
      fullname: formdata.fullname[0],
      sponsorId: formdata.sponsorId[0],
      password: formdata.password[0],
      transactionPin: formdata.transactionPin[0],
    };
    console.log(FormData.sponsorId);

    // calling custom hook for api calling
    const userSignedIn = CustomApiHandlePost(
      "/api/v1/users/register",
      FormData
    );




    userSignedIn
      .then((response) => {
       
        // const { data: message="", status } = response.response;
        if(response.response===undefined || !response){
        const {data,message,statusCode,success} =  response
        if(response){
          setResponse({
            data:data,
            message:message,
            statusCode:statusCode,
            success:success
          })
        }
        return;
      }


      
        const {data:Message,status} = response.response 
        console.log(Message,status, " here my data")

        const startIndex = Message.indexOf("Error: ") + "Error: ".length;
        const endIndex = Message.indexOf("<br>");
        const errorMessage = Message.slice(startIndex, endIndex);
        console.log(errorMessage)

        
        
      })
      .catch((err) => {
        console.log("cath", err);
        console.log(err.response);
      });
  };

  // console.log(formdata)

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>
          <form
            action="#"
            method="POST"
            className="mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    {...register("email",{required:"Email is required"})}
                    name="email"
                    onChange={handleFormData}
                  ></input>
                  {errors.email && <span>email is required</span>}
                </div>  
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="fullname"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="fullname"
                    name="fullname"
                    onChange={handleFormData}
                  ></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="sponserId"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    SponserId{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="sponsorId"
                    placeholder="SponserId"
                    id="sponsorId"
                    onChange={handleFormData}
                  ></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={handleFormData}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    TransactionPin{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="TransactionPin"
                    id="transactionPin"
                    name="transactionPin"
                    onChange={handleFormData}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}
