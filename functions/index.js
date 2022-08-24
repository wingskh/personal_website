addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const response = await fetch(request);

  // Clone the response so that it's no longer immutable
  const newResponse = new Response(response.body, response);

  // Add a custom header with a value
  newResponse.headers.append(
    "x-workers-hello",
    "Hello from Cloudflare Workers"
  );

  // Delete headers
  newResponse.headers.delete("x-header-to-delete");
  newResponse.headers.delete("x-header2-to-delete");

  // Adjust the value for an existing header
  newResponse.headers.set("x-header-to-change", "NewValue");
  newResponse.headers.append("Access-Control-Allow-Origin", "*");
  newResponse.headers.set("Access-Control-Allow-Origin", "*");

  return newResponse;
}
