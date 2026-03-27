import { Admin, Moderator, RegularUser, User } from '../models/user.types';

export function isAdmin(user : User): user is Admin {
    return (user as Admin).createUser !==undefined;
}

export function isModerator(user: User): user is Moderator {
  return (user as Moderator).banUser !== undefined;
}

export function isRegularUser(user: User): user is RegularUser {
  return (user as RegularUser).viewContent !== undefined;
}
