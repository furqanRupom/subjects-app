import { connectToDB } from "@/db/dbConfig";
import subject from "@/models/subjects";
import { NextResponse, NextRequest } from "next/server";



connectToDB();

//  create all data
export const POST = async (request: NextResponse) => {
  try {

    const subjectsInfo = await request.json();
    const {name} =  subjectsInfo
    console.log(name)
    const isSubjectAdded = await subject.findOne({name});
    if(!isSubjectAdded){
      await subject.create(subjectsInfo);
      return NextResponse.json(
        { message: "subject added successfully!" },
        { status: 200 }
      );

    }
    return NextResponse.json({error:'subject is already added'},{status:403})
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 403 });
  }
};


// get all the subject

export const GET = async() =>{
   const subjects = await subject.find();
   return NextResponse.json({subjects});
}


// delete a particular data;

export const DELETE = async(request:NextRequest) =>{
  const id = request.nextUrl.searchParams.get("id");
  await subject.findByIdAndDelete(id);
  return NextResponse.json({message:"subject successfully deleted"},{status:200})
}