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
// app/api/categories/route.js
// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // quick DB ping (Mongo + Prisma)
//     await prisma.$runCommandRaw({ ping: 1 });

//     const categories = await prisma.category.findMany();
//     return NextResponse.json(categories, { status: 200 });
//   } catch (err) {
//     console.error("GET /api/categories error →", err);
//     return NextResponse.json(
//       { message: String(err?.message || err), code: err?.code, meta: err?.meta },
//       { status: 500 }
//     );
//   }
// }
