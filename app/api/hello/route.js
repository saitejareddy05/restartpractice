export function GET(request) {
  return Response.json({
    message: "Hello from Next.js API Route!",
    timestamp: Date.now(),
  });
}
