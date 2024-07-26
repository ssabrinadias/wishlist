import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from "./src/config/server";

const originalEnv = process.env;
beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    NEXT_API_URL: "http://localhost:3000",
  };
});

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  process.env = originalEnv;
});

afterAll(() => server.close());
