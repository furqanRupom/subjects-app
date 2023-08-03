"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddSubjects = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/subjects", data);
      console.log(data);
      toast.success("subjects successfully added");
      router.push('/allSubject');

    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <section className="max-w-7xl mx-auto py-8">
      <h3 className="text-center py-5 px-3 text-3xl uppercase">
        Add your <span className="text-white bg-red-500 p-1">Subjects</span>
      </h3>
      <form
        className="mt-12 max-w-xl mx-auto flex flex-col space-y-5 px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="px-4 py-2 border border-red-500 rounded-full"
          {...register("name", { required: true })}
          type="text"
          placeholder="Enter subjects name"
        />
        <input
          className="px-4 py-2 border border-red-500 rounded-full"
          {...register("author", { required: true })}
          type="text"
          placeholder="Enter author name"
        />
        <input
          className="px-4 py-2 border border-red-500 rounded-full"
          {...register("type", { required: true })}
          type="text"
          placeholder="Enter type of subjects"
        />
        <textarea
          className="px-4 py-2 border border-red-500 rounded-md"
          {...register("description", { required: true })}
          rows={10}
          cols={40}
          defaultValue="Describe your subject"
        ></textarea>

        <button
          className="px-7 py-5 bg-red-500 text-white text-xl font-medium"
          type="submit"
        >
          Add Subjects
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default AddSubjects;
