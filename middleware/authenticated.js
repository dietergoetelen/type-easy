export default ({store, redirect}) => {
  if (!store.getters['profile/user']) {
    return redirect('/login');
  }
};