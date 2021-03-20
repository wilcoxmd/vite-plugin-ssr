// Route Functions give us full flexibility
// This is a route similar to `/hello/:name` but with details impossible to achieve with a route string.
export default (url: string) => {
  if (!url.startsWith("/hello")) {
    return { match: false };
  }
  const name = url.split("/")[2] || "anonymous";
  return { match: true, contextProps: { name } };
};
