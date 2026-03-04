import React from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // submit handler
  const onUserCreate = async (data) => {
    console.log("Form Data:", data);
    // MAKE ATTP POST REQ TO CREATE NEW USER
    try
    {
        let res=await fetch("http://localhost:3000/user-api/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(res.status===201){

          res.json().then(data => {
            console.log("User Created Successfully:", data);
            navigate("/userList");
        })
    }
    else{
        throw new Error("Failed to create user");
    }
    }catch (err){
        setError("Error creating user: " + err.message)
       
    }
    finally
    {
        setLoding(false);
        // reset the form after submission
    }
    if (loading) {
      return <p className="text-blue-500">Loading...</p>;
    }
    if (error) {
        return <p className="text-red-500">{error}</p>;
  };
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Add User</h1>

      <form
        className="flex flex-col bg-white shadow-md p-6 rounded-md"
        onSubmit={handleSubmit(onUserCreate)}
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-300 rounded-md p-2 m-2"
          {...register("name", { required: "Name is required" })}
        />
     

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 rounded-md p-2 m-2"
          {...register("email", { required: "Email is required" })}
        />
     
        {/* DOB */}
        <input
          type="date"
          className="border-2 border-gray-300 rounded-md p-2 m-2"
          {...register("dob", { required: "Date of Birth is required" })}
        />
       
        {/* Mobile Number */}
        <input
          type="number"
          placeholder="Mobile Number"
          className="border-2 border-gray-300 rounded-md p-2 m-2"
          {...register("mobileNumber")}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md m-2"
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
