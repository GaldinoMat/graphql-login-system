import DataLoader from 'dataloader';

export const makePostDataloader = (getPosts: (url: string) => Promise<any>) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&userId=');
    const posts = await getPosts(`?userId=${urlQuery}`);
    return ids.map((id) => posts.filter((post: any) => post.userId === id));
  });
};
