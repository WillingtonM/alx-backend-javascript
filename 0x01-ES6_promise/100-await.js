import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let reslt = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    reslt = { photo, user };
  } catch (err) {
    reslt = { photo: null, user: null };
  }
  return reslt;
}
