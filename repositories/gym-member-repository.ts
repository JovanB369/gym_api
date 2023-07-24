import dbConnection from "../common/db-connection";

const getAllMembers = async () => {
    try {
        const data = await dbConnection.query('SELECT * FROM gym_member'); 
        return data;
    }
    catch(e){
        return []; 
    }
}

const getMemberByID = async (id: number) => {
    try {
        const data = await dbConnection.query(`SELECT * FROM gym_member WHERE id = ?`, 
                                               [ id ]);
        return data; 
    }
    catch(e){
        return null; 
    }
}

const insertMember = async (member: any) => {
    try {
        const result = await dbConnection.query(`INSERT INTO gym_member (
                                                first_name, last_name, 
                                                birthdate, adress, 
                                                email,phone_number
                                                ) VALUES 
                                                (?, ?, ?, ?, ?, ?)`, 
                                                [ member.firstName, 
                                                  member.lastName, 
                                                  member.birthDate, 
                                                  member.adress, 
                                                  member.email,
                                                  member.phoneNumber]);
        return { success: true, result }; 
    }
    catch(e: any){
        return { success: false, msg: e.message }; 
    }
}

const updateMember = async (id: number, member:any) => {
    try { 
        const result = await dbConnection.query(`UPDATE gym_member
                                                 SET first_name = ?, 
                                                 last_name = ?, 
                                                 birthdate = ?, 
                                                 adress = ?,  
                                                 email = ?,
                                                 email = ? 
                                                 WHERE id = ?`, 
                                                 [ member.firstName, 
                                                   member.lastName, 
                                                   member.birthDate, 
                                                   member.adress,
                                                   member.email,
                                                   member.phoneNumber,  
                                                   id ]);
        return { success: true, result };
    }
    catch(e:any){
        return { success: false, msg: e.message };
    }
}

const deleteMember = async (id: number) => {
    try {
        const result = await 
                        dbConnection.query(`DELETE FROM gym_member WHERE id = ?`,
                        [ id ]);
        return { success: true };
    }
    catch(e: any){
        return { success: false, msg: e.message };
    }
}

export default { getAllMembers, getMemberByID, insertMember, updateMember, deleteMember};