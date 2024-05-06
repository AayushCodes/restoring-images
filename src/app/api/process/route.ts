export async function POST(request: Request) {
  const body = await request.json();
  //   console.log(body);
  const res = await fetch("https://9958-223-228-206-90.ngrok-free.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return Response.json(await res.json());
}
