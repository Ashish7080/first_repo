/**
 * @param { number } age- This param is used to calculate the Age of a man
 * @param { string } id_number - this param is used to find the user from server
 * @returns {object}  Contains the info of User
 */

const process_job = async (age, id_number) => {
  //find the user from DB
  const user = await User.findOne({
    id: id_number,
  });
  if (!user) {
    throw new Error("User does not exist with provided id Number");
  }
  return user;
};
setTimeout(() => {
  process_job();
}, 2000);
