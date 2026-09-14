export function validateApiResponse<T>(data: T): T {
  return data;
}

export function formatValidationError(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error ?? 'Validation failed');
}

export function unwrapDataEnvelope<T>(payload: { data?: T } | T): T {
  if (
    payload &&
    typeof payload === 'object' &&
    'data' in payload &&
    (payload as { data?: T }).data !== undefined
  ) {
    return (payload as { data: T }).data;
  }
  return payload as T;
}
