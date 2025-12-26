import { config } from "../config/config.js";
import { Client,Account,ID} from "appwrite";

import { Client, Account, ID } from "appwrite";

export class AuthService {
     client = new Client();
     account;

     constructor(){
        this.client
            .setProject(config.appwriteProjectId)
            .setEndpoint(config.appwriteUrl);
        this.account = new Account(this.client)
     }

     async createAccount({email,password,name}){
       try {
         const userAccount = await this.account.create(ID.unique(),email,password);
         if(userAccount){
            return this.login(email,password);
         }
         else{
            return userAccount;
         }
       } catch (error) {
         throw error
       }
     }
     async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
     }

     async getCurrentUser(){
        try {
           return  this.account.get();
        } catch (error) {
            throw error;
        }
     }

     async logout(){
        try {
            await this.account.deleteSession()
        } catch (error) {
            throw error
        }
     }

}

const  authService = new AuthService();
export default authService;


// const client = new Client()
//     .setProject('<PROJECT_ID>'); // Your project ID
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1');

// const account = new Account(client);

// try {
//     const user = await account.create({
//         userId: '[USER_ID]',
//         email: 'email@example.com',
//         password: '<Password>'
//     });
//     console.log(user)
// } catch (e){
//     console.error(e)
// }



