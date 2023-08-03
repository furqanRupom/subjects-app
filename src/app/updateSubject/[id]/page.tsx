"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const UpdateSubject = ({params}:any) => {
    const {id} = params;
    // const handleEdit = async(id: any) => {
  //   const response = await axios.put(`/api/subjects/${id}`);
  //   toast.success("Subject has been updated");
  //   return response.data
  // };


  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
        const {name,description} = data
        const response = await axios.put( `/api/subjects/${id}`,{name,description});
        console.log(response.data);
        toast.success("Subject successfully updated");
        router.push('/allSubject');
        return response.data;

    } catch (error: any) {
        toast.error(error.message);
    }
  };

    return (
        <section className="max-w-7xl mx-auto py-8">
      <h3 className="text-center py-5 px-3 text-3xl uppercase">
        Update your <span className="text-white bg-red-500 p-1">Subjects</span>
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
          Update Subject
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
    );
};

export default UpdateSubject;