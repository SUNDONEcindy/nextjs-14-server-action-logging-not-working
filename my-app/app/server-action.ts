"use server";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// It seems that if you have useFormState, you must add the extra formDataPrev parameter
export async function myServerAction(
  formDataPrev: FormData,
  formData: FormData,
) {
  const firstname = formData?.get("firstname") ?? "";
  const email = formData?.get("email") ?? "";

  await sleep(2000);

  return {
    message:
      email === "bad@bad.com"
        ? "error"
        : "success",
    errors: email === "bad@bad.com" ? { email: "error cause can not use bad@bad.com as email"} : undefined,
    fieldValues: {
      firstname: firstname,
      email: email,
    },
  };
}
