export function GET(request) {
  const apiKey = process.env.BOOKID;
  return Response.json({
    key: apiKey
  });
}
