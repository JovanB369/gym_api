import dbConnection from "../common/db-connection";

const getAllUsers = async ()=>{
    try {
        const data = await dbConnection.query('SELECT * from users');
        return data
    } catch (e) {
        return [];
    }
}

const getUserByID = async (id:number) =>{
    try {
        const data = await dbConnection.query(`SELECT * FROM users WHERE id = ?`,
                                                [id]);
        return data;
    } catch (e) {
        return null
    }
}

const insertUserManually = async (user:any) =>{
    try {
        const result = await dbConnection.query(`INSERT INTO users (
                                                username,hashed_password,roles,
                                                packages,first_name, last_name,
                                                birthdate, adress, 
                                                email,phone_number
                                                ) VALUES 
                                                (?, ?, ?, ?, ?, ?,?,?,?,?)`,
                                                [user.username,
                                                user.hashedPassword,
                                                user.roles,
                                                user.packages,
                                                user.firstName,
                                                user.lastName,
                                                user.birthDate,
                                                user.adress,
                                                user.email,
                                                user.phoneNumber]);
        return {success:true , result}
    } catch (e:any) {
        return {success: false, msg:e.message};
    }
}

const updateUserData = async (id:number,user:any) =>{
    try {
        const result = await dbConnection.query(`UPDATE users
                                        SET username = ?,
                                        hashed_password = ?,
                                        roles = ?,
                                        packages = ?,
                                        first_name = ?,
                                        last_name = ?,
                                        birthdate = ?,
                                        adress = ?,
                                        email = ?,
                                        phone_number = ?
                                        WHERE id = ?`,
                                        [user.username,
                                        user.hashedPassword,
                                        user.roles,
                                        user.packages,
                                        user.firstName,
                                        user.lastName,
                                        user.birthDate,
                                        user.adress,
                                        user.email,
                                        user.phoneNumber,
                                        id]);
    return {success:true , result};
    } catch (e:any) {
        return {success: false, msg: e.message}
    }
}

const deleteUser = async (id: number) => {
    try {
        const result = await dbConnection.query(`DELETE FROM users WHERE id = ?`,
                                                [id]);
        return {success:true}
    } catch (e:any) {
        return {success:false, msg: e.message}
    }
}

const register = async (user: any) => {
    try {
        const result = await dbConnection.query(`INSERT INTO users (
                                                username,hashed_password,roles,
                                                packages,first_name, last_name,
                                                birthdate, adress, 
                                                email,phone_number
                                                ) VALUES 
                                                (?, ?, ?, ?, ?, ?,?,?,?,?)`,
                                                [user.username,
                                                user.hashedPassword,
                                                user.roles,
                                                user.packages,
                                                user.firstName,
                                                user.lastName,
                                                user.birthDate,
                                                user.adress,
                                                user.email,
                                                user.phoneNumber]); 
        return result; 
    }
    catch(e: any) {
        return { success: false, msg: e.message }
    }
}

const login = async (user: any) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM users WHERE username = ? AND hashed_password = ?`, 
                                                [user.username, user.hashedPassword]);
        return result; 
    }
    catch(e: any) {
        return { success: false, msg: e.message }
    }
}


export default { getAllUsers, getUserByID, insertUserManually, updateUserData , deleteUser , register , login }