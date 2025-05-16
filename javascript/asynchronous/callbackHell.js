// Callback hell
getUser(1, (user) => {
  getProfile(user, (profile) => {
    getPosts(profile, (posts) => {
      getComments(posts[0].id, (comments) => {
        console.log(comments);
      });
    });
  });
});
