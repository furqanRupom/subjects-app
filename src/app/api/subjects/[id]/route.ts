import { connectToDB } from "@/db/dbConfig";
import subject from "@/models/subjects";
import { NextRequest, NextResponse } from "next/server";


connectToDB();
// updated the data
export const PUT = async(request:NextRequest,{params}:any) =>{
    const {id} = params;
    const {name,description} = await request.json();
    const updated = await subject.findByIdAndUpdate(id,{name,description});
    if (updated) return NextResponse.json({message:"updated successfully !"},{status:200});
    else return NextResponse.json({error:"something went wrong"},{status:401});

}