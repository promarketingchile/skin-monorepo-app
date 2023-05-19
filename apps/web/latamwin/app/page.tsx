import { Button } from "ui-latamwin";
import { toSlug } from "@acme/utils";

export default function Page() {
  return (
    <>
      <div className="flex w-full justify-center bg-red-900 text-lg">
        {toSlug("latamwin-chile")}
      </div>
      <Button title="From App Latamwin" />
    </>
  );
}
