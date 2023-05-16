import { Button } from "ui-latamwin";
import { toSlug } from "@acme/utils";

export default function Page() {
  return (
    <>
      {toSlug("latamwin-chile")}
      <Button>Hello</Button>
    </>
  );
}
