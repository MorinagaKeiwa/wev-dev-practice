const HTTP_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH"] as const;
type HttpMethod = (typeof HTTP_METHODS)[number];

const STATUS = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  serverError: 500,
} as const;
type StatusCode = (typeof STATUS)[keyof typeof STATUS];

function mockRequest(method: HttpMethod, statusCode: StatusCode): void {
  console.log(`${method} -> ${statusCode}`);
}

mockRequest("GET", STATUS.ok);
mockRequest("POST", STATUS.created);
mockRequest("DELETE", STATUS.notFound);

const methods: HttpMethod[] = [...HTTP_METHODS];
console.log("利用可能なメソッド:", methods.join(", "));
