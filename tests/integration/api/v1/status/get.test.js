test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responsyBody = await response.json();

  const parsedUpdateAt = new Date(responsyBody.updated_at).toISOString();
  expect(responsyBody.updated_at).toEqual(parsedUpdateAt);

  expect(responsyBody.dependencies.database.version).toEqual("16.0");
  expect(responsyBody.dependencies.database.max_connections).toEqual(100);
  expect(responsyBody.dependencies.database.opened_connections).toEqual(1);
});
