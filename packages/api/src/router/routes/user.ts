import { publicProcedure, router } from "..";
import { object, string } from "zod";

export default router({
  get: publicProcedure.query(() => {
    return {
      user: "Haniel",
      id: 1,
    };
  }),

  add: publicProcedure
    .input(
      object({
        name: string(),
        email: string().email(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.user;
    }),
});
