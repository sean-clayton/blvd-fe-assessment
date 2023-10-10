export interface DisifySingleEmailResponse {
  format?: boolean;
  domain?: string;
  disposable?: boolean;
  dns?: boolean;
  alias?: boolean;
}

export function getSingleEmail(email: string) {
  return fetch(`https://www.disify.com/api/email/${email}`);
}
