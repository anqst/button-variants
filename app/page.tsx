import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4">
      <Button
        variants={{ color: "primary" }}
        className="bg-red-500 hover:bg-red-400"
      >
        Click me
      </Button>
      <Button variants={{ color: "primary", rounding: "tiny" }}>
        Click me
      </Button>
      <Button variants={{ color: "primary", rounding: "full" }}>
        Click me
      </Button>
      <Button variants={{ color: "secondary", rounding: "tiny" }}>
        Click me
      </Button>
    </div>
  );
}
