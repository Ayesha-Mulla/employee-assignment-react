import { authenticationService } from '@/_services';

export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = data;
      return Promise.reject(error);
    }

    return data;
  });
}
