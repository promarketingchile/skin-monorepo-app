import { Button } from "ui-latamwin";
import { toSlug } from "@acme/utils";

export default function Page() {
  return (
    <>
      <div className="flex w-full justify-center text-lg bg-red-900">
        {toSlug("latamwin-chile")}
      </div>
      <Button>Hello</Button>
    </>
  );
}
