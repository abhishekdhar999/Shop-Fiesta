// export const metadata: Metadata = {
//     title: "Add Product - shopify"
// }

import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

// export metadata
async function addProduct(formData:FormData) {
    "use server";

    const session = await getServerSession(authOptions);
    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product")
    }
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price  = Number(formData.get("price") || 0);
    //  throw Error("bazinga!")
    if(!name || !description || !imageUrl  || !price){
        throw Error ("Missing required fields");
    }

    
    await prisma.product.create({
        data:{name,description,imageUrl,price},
    });
    
    redirect("/")
}

export default async function AddProductPage() {

    const session = await getServerSession(authOptions)

    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product")
    }
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form action={addProduct}>
                <input
                    required
                    name="name"
                    placeholder="Name"
                    className="mb-3 w-full input input-bordered" type="text"
                />
                <textarea
                    required
                    name="description"
                    placeholder="description"
                    className="textarea teaxtarea-bordered mb-3 w-full">

                </textarea>

                <input
                    required
                    name="imageUrl"
                    placeholder="imageUrl"
                    className="mb-3 w-full input input-bordered" type="url"
                />

                <input
                    required
                    name="price"
                    placeholder="price"
                    type="number"
                    className="mb-3 w-full input input-bordered"
                />

                <FormSubmitButton className="btn btn-primary btn-block" type="submit">Add Product</FormSubmitButton>
            </form>
        </div>
    )
}