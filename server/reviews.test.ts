import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("reviews.list", () => {
  it("returns an array of reviews", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.reviews.list();

    expect(Array.isArray(result)).toBe(true);
  });

  it("returns reviews with required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.reviews.list();

    if (result.length > 0) {
      const review = result[0];
      expect(review).toHaveProperty("id");
      expect(review).toHaveProperty("name");
      expect(review).toHaveProperty("suburb");
      expect(review).toHaveProperty("rating");
      expect(review).toHaveProperty("text");
      expect(review).toHaveProperty("createdAt");
    }
  });

  it("returns reviews with valid ratings", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.reviews.list();

    result.forEach((review) => {
      expect(review.rating).toBeGreaterThanOrEqual(1);
      expect(review.rating).toBeLessThanOrEqual(5);
    });
  });

  it("returns reviews with non-empty text and name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.reviews.list();

    result.forEach((review) => {
      expect(review.text.length).toBeGreaterThan(0);
      expect(review.name.length).toBeGreaterThan(0);
      expect(review.suburb.length).toBeGreaterThan(0);
    });
  });

  it("returns at least 13 reviews from seed data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.reviews.list();

    expect(result.length).toBeGreaterThanOrEqual(13);
  });
});
