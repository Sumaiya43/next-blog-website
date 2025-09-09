import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};

// export const dynamic = "force-dynamic";
// export const runtime = "nodejs";

// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const categories = await prisma.category.findMany();
//     return NextResponse.json(categories, { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }

