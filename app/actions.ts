"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — silent reject
  if ((formData.get("website") as string)?.length) {
    return { status: "success", message: "" };
  }

  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const projectType = (formData.get("projectType") as string)?.trim();

  if (!name || !phone || !email || !projectType) {
    return {
      status: "error",
      message: "Please fill in your name, phone, email, and project type.",
    };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return {
      status: "error",
      message: "That email address doesn't look quite right.",
    };
  }

  // TODO: forward to email/CRM once real business info is provided.
  console.info("[auburnbath:contact]", {
    name,
    phone,
    email,
    city: formData.get("city"),
    projectType,
    message: formData.get("message"),
  });

  return { status: "success", message: "" };
}
