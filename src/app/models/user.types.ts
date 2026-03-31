
export interface Admin {
    name: string;
    email: string;
    createUser(user : User): void;
}

export interface Moderator {
    name: string;
    email: string;
    banUser(user: User): void;
}

export interface RegularUser {
    name: string;
    email: string;
    viewContent(): void;
}

export type User = Admin | Moderator | RegularUser;

export type SuperUser = Admin & Moderator;
