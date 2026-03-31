import { Injectable } from "@angular/core";
import { User, SuperUser } from '../models/user.types'
import { isAdmin, isModerator, isRegularUser } from "../guards/user.guards";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    performAdminTask( user : User, task: () => void): void{
        if (isAdmin(user)) {
            console.log(`Admin "${user.name}" is doing..`);
            task();
        }   else {
            console.error(`mistake "${user.name}" is not a admin!`);
        }
    }

    moderateContent(user : User, contentId: string): void {
        if (isModerator(user)) {
            console.log(`Moderator "{user.name}" Moderator content ID: ${contentId}`);
            console.log(`Content "${contentId}" is banned!`);
        } else {
            console.error(`wrong: "${user.name}" is not a Moderator`);
        }
    }

    viewContentAsUser(user: User): void {
        if (isRegularUser(user)) {
            console.log(`"${user.name}" watching..`);
            user.viewContent();
        } else {
            console.error(`mistake: "${user.name}" is not a regular user!`);
        }
    }  

    superUserTask(user: SuperUser, task: () => void): void {
        console.log(`SuperUser "${user.name}" is doing tasks..`);
        task();
    }
}
