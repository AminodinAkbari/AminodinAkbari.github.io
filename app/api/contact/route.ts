import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (
    !formLink ||
    !fieldIdName ||
    !fieldIdEmail ||
    !fieldIdMessage ||
    !fieldIdSocial
  ) {
    return new NextResponse("Please configure the environment variables", {
      status: 500,
    });
  }

  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    const params = new URLSearchParams({
      [fieldIdName]: name ?? "",
      [fieldIdEmail]: email ?? "",
      [fieldIdMessage]: message ?? "",
      [fieldIdSocial]: social ?? "",
    });

    const res = await fetch(`${formLink}/formResponse?${params.toString()}`);
    console.log(res)

    if (!res.ok) {
      return new NextResponse("Failed to submit form", {
        status: 500,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return new NextResponse("Internal error", {
      status: 500,
    });
  }
}