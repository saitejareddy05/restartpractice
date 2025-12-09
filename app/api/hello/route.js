export function GET() {
  const apiKey = process.env.BOOKID;
  return Response.json({
    key: apiKey,
  });
}
