import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/generate")({
  component: GeneratePin,
});

function GeneratePin() {
  const pin = Math.floor(1000 + Math.random() * 9000).toString();

  return (
    <pre>
      {JSON.stringify({ pin }, null, 2)}
    </pre>
  );
}
