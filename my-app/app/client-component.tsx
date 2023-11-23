"use client";

import { useFormState } from "react-dom";

import { myServerAction } from "@/app/server-action";

export default function ClientComponent() {
  // @ts-ignore
  const [localState, formAction] = useFormState(myServerAction, {
    myLocalState: "initial",
  });

  return (
    <div>
      <h1>ClientComponent</h1>
      <form action={myServerAction}>
        <input type="text" name="firstname" defaultValue="starting value" />
        <input type="email" name="email" defaultValue="joe@theplumber.com" />
        <input type="submit" value="Submit" />
      </form>
      <hr />
      {JSON.stringify(localState)}
    </div>
  );
}
