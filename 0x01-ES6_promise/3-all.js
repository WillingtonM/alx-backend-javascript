import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((reslt) => {
      console.log(`${reslt[0].body} ${reslt[1].firstName} ${reslt[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
