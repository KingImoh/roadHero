import { protectedProcedure, publicProcedure, router } from "../trpc";
import { object, string } from "zod";

export default router({
  get: publicProcedure.query(async ({ ctx }) => {
    return await ctx.pb.collection("reports").getList(1, 10, {
      filter: 'created >= "2022-01-01 00:00:00"',
    });
  }),

  // remember to space out the route names
  add: protectedProcedure
    .input(
      object({
        title: string(),
        description: string(),
      })
    )
    .query(async ({ ctx, input }) => {
      // return await ctx.pb.collection("reports").addOrSomething(input);
    }),
});
