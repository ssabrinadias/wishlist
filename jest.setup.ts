import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import 'whatwg-fetch';
import { server } from "./src/config/server";

const originalEnv = process.env;

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
const useRouterMock = useRouter as jest.Mock;
useRouterMock.mockReturnValue({
  push: jest.fn(),
  prefetch: jest.fn(),
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
});
beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    NEXT_API_URL: "http://localhost:3000",
    NEXT_PUBLIC_API_URL:"http://localhost:3000"
  };
});

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  process.env = originalEnv;
});

afterAll(() => server.close());
