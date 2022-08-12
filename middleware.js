/* eslint-disable @next/next/no-server-import-in-page */
// import { NextResponse } from "next/server";

// export function middleware(req, ev) {
//   //   if (req.page.name === "/api/entries") return NextResponse.next();

//   const id = req.page.params?.id || "";

//   const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

//   if (!checkMongoIDRegExp.test(id)) {
//     // return res.status(400).json({ message: "El id no es valido" + id });
//     return new Response(
//       JSON.stringify({ message: "El id no es valido " + id }),
//       {
//         status: 400,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }

//   return NextResponse.next();
// }
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/api/entries/")) {
    const id = req.nextUrl.pathname.replace("/api/entries/", "");
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if (!checkMongoIDRegExp.test(id)) {
      const url = req.nextUrl.clone();
      url.pathname = "/api/bad-request";
      url.search = `?message=${id} no es un mongoId valido`
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // "/api/:path",
    "/api/entries/:path",
  ],
};
