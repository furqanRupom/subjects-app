"use client";

import axios from "axios";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Loading from "./loading";

const AllSubject = () => {
  const [subjects, setSubjects] = useState([]);
  axios.get("/api/subjects").then((response) => {
    setSubjects(response.data.subjects);
  });


  const handleDelete =async(id: any) => {
    const response = await axios.delete(`/api/subjects?id=${id}`);
    toast.success("Subject has been deleted");
    return response.data;
  };

  return (

    <>
    <div className="max-w-7xl mx-auto pt-12 pb-8">
      <h1 className="text-3xl font-semibold mb-4">All Subjects <span className="text-lime-500">and Books</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {subjects.map(({ _id, author, type, name, description }) => (
          <div key={_id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-lime-600 mb-2">
              {name}
            </h3>
            <p className="text-gray-600 mb-2">Author: {author}</p>
            <p className="text-gray-600 mb-2">Type: {type}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex justify-end space-x-4">
              <Link href={`/updateSubject/${_id}`}>
              <button
                className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded focus:outline-none"

              >
                Edit
              </button>
              </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>

    </>
  );
};

export default AllSubject;
