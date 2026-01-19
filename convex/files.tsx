import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createFile = mutation({
  args: {
    fileName: v.string(),
    teamId: v.string(),
    createBy: v.string(),
    archive: v.boolean(),
    document: v.string(),
    whiteboard: v.string(),
  },
  handler: async (ctx, args_0) => {
    const result = await ctx.db.insert('files', args_0);
    return result;
  },
});

export const getFiles = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args_0) => {
    const result = ctx.db
      .query('files')
      .filter((q) => q.eq(q.field('teamId'), args_0.teamId))
      .collect();
    return result;
  },
});
