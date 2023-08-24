import userRepository from "../repositories/user-repository";
import crypto from 'crypto'; 
import jwt from 'jsonwebtoken'; 

const getAllUsers = async () =>{
    const data = await userRepository.getAllUsers();
    
    const result : any = [];
    data.forEach((user: any) =>{
        result.push({
            id: user.id,
            username: user.username,
            hashedPassword: user.hashed_password,
            roles: user.roles,
            packages: user.packages,
            firstName: user.first_name,
            lastName: user.last_name,
            birthDate: user.birthdate,
            adress: user.adress,
            email: user.email,
            phoneNumber: user.phone_number,
        })
    })
    return result;
}

const getUserByID = async (id:number) =>{
    const data = await userRepository.getUserByID(id)
    if(data && data.length > 0){
        return {
            id: data[0].id,
            username: data[0].username,
            hashedPassword: data[0].hashed_password,
            roles: data[0].roles,
            packages: data[0].packages,
            firstName: data[0].first_name,
            lastName: data[0].last_name,
            birthDate: data[0].birthdate,
            adress: data[0].adress,
            email: data[0].email,
            phoneNumber: data[0].phone_number,
        }
    }
    return null;
}

const insertUserManually = async (user: any) => {
    user.hashedPassword = crypto.createHash('md5').update(user.hashedPassword).digest('hex');
    const result = await userRepository.insertUserManually(user); 
    return result; 
}

const updateUserData = async (user: any , id: number) => {
    const result = await userRepository.updateUserData(user,id); 
    return result; 
}

const deleteUser = async (id: number) => {
    const result = await userRepository.deleteUser(id); 
    return result; 
}


const register = async (user: any) => {
    user.hashedPassword = crypto.createHash('md5').update(user.hashedPassword).digest('hex');
    const result = await userRepository.register(user); 

    if (result.affectedRows > 0) {
        const token = jwt.sign({
            username: user.username, 
            role: user.roles
        }, 'SECRET');

        return { success: true, token }; 
    }
    else {

        return { success: false, result }; 
    }
}

const login = async (user: any) => {
    user.hashedPassword = crypto.createHash('md5').update(user.hashedPassword).digest('hex');
    const result = await userRepository.login(user); 

    if (result && result.length > 0) {
        // ovo znaci da je ulogovan 
        const token = jwt.sign({
            username: user.username, 
            isAdmin: result[0].roles == 'admin'
            
        }, 'SECRET');
        
        return { success: true, token }; 
    }
    else {
        return { success: false, result }; 
    }
}

export default { getAllUsers, getUserByID, insertUserManually, updateUserData, deleteUser , register,login}