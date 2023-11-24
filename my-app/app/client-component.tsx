"use client";

import { useFormState } from "react-dom";

import { myServerAction } from "@/app/server-action";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button type="submit" className="btn btn-primary " disabled={pending}>
          Save Changes
        </button>
      ) : (
        <button type="submit" className="btn btn-primary " disabled={pending}>
          Save Changes
        </button>
      )}
    </>
  );
}

export default function ClientComponent() {
  // @ts-ignore
  const [localState, formAction] = useFormState(myServerAction, {
    myLocalState: "initial",
  });

  const [showInputFields, setShowInputFields] = useState(true);

  useEffect(() => {
    if (localState.message === "success") {
      setShowInputFields(false);
    }
  }, [localState.message]);

  return (
    <div>
      <h1>ClientComponent</h1>
      <form action={formAction}>
        {showInputFields ? (
          <>
            <input type="text" name="firstname" defaultValue="" />:
            <input type="email" name="email" defaultValue="" />
            <Submit />
          </>
        ) : (
          <>
            {localState.fieldValues.firstname}:{localState.fieldValues.email}
          </>
        )}
      </form>
      <hr />
      {JSON.stringify(localState)}
      <br />
    </div>
  );
}
