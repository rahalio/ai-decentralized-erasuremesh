/**
 * Postman-collection 1:1 Vitest tests for exceptions (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  cursor: "",
  exceptionId: "",
  limit: "",
  orderId: "",
  status: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / exceptions (1:1 generated)", () => {

  it("listExceptions", async () => {
    const url = sub("{{baseUrl}}/v1/exceptions?cursor={{cursor}}&limit={{limit}}&status={{status}}&orderId={{orderId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("createException", async () => {
    const url = sub("{{baseUrl}}/v1/exceptions");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"orderId\": \"newman_orderId\",\n  \"kind\": \"sla_breach\",\n  \"rationale\": \"\",\n  \"remediationPlan\": \"\",\n  \"overdueNodeIds\": null\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['exceptionId'] = j.data.id;
  });

  it("getException", async () => {
    const url = sub("{{baseUrl}}/v1/exceptions/{{exceptionId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("decideException", async () => {
    const url = sub("{{baseUrl}}/v1/exceptions/{{exceptionId}}/decide");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"decision\": \"approve\",\n  \"decisionRationale\": \"\",\n  \"remediationPlan\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });
});
