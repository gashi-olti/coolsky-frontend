export async function fetchJson(...args: [input: RequestInfo, init?: RequestInit | undefined]) {
  try {
    const headers: HeadersInit = new Headers(args[1]?.headers);
    headers.set('Content-Type', 'application/json');

    const init = {
      ...(args[1] && { ...args[1] }),
      headers,
    };
    const response = await fetch(args[0], init);
    const data = await response.json();

    if (response.ok) {
      return data;
    }

    const error: any = new Error(response.statusText);
    error.response = response;
    error.data = data;
    error.status = response.status;

    throw error;
  } catch (error: any) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}

export default class Api {
  public static async get(url: string) {
    return fetchJson(url);
  }
}
