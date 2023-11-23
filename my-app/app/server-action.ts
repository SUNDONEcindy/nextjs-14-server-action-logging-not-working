'use server';
export async function myServerAction(formData: FormData) {
  console.log("myAction: formData:", formData);
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(3000);

  return {
    message: "success",
    errors: undefined,
    fieldValues: {
      firstname: "Peter",
      email: "peter@myemail.com",
    },
  };
}
