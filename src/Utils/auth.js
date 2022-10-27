//user가 있나 확인하는 함수..
function getUser() {
  //api call같은거나로 변경?
  const user = localStorage.getItem('user');
  console.log('storage', user);
  if (user !== undefined) {
    return user;
  }
  return undefined;
}
// const isAuthenticated = async () => {};

export default getUser;
