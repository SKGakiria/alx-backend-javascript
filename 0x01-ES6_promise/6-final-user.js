import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const array = [];
  try {
    const user = await signUpUser(firstName, lastName);
    array.push({ status: 'fulfilled', value: user });
  } catch (err) {
    array.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    array.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    array.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return array;
}
