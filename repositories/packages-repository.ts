import dbConnection from "../common/db-connection";

const getAllPackages= async () => {
    try {
        const data = await dbConnection.query('SELECT * FROM type_of_training'); 
        return data;
    }
    catch(e){
        return []; 
    }
}

const getPackageByID = async (id: number) => {
    try {
        const data = await dbConnection.query(`SELECT * FROM type_of_training WHERE id = ?`, 
                                               [ id ]);
        return data; 
    }
    catch(e){
        return null; 
    }
}

const insertPackages = async (packages: any) => {
    try {
        const result = await dbConnection.query(`INSERT INTO type_of_training (
                                                name,description,price
                                                ) VALUES 
                                                (?, ?, ?, ?, ?, ?)`, 
                                                [ packages.name,
                                                packages.description,
                                                packages.price]);
        return { success: true, result }; 
    }
    catch(e: any){
        return { success: false, msg: e.message }; 
    }
}

const updatePackages = async (id: number, packages:any) => {
    try { 
        const result = await dbConnection.query(`UPDATE type_of_training
                                                 SET name = ?
                                                 description = ?,
                                                 price = ?` 
                                                 [ packages.name,
                                                    packages.description,
                                                    packages.price,  
                                                   id ]);
        return { success: true, result };
    }
    catch(e:any){
        return { success: false, msg: e.message };
    }
}

const deletePackages = async (id: number) => {
    try {
        const result = await 
                        dbConnection.query(`DELETE FROM type_of_training WHERE id = ?`,
                        [ id ]);
        return { success: true };
    }
    catch(e: any){
        return { success: false, msg: e.message };
    }
}

export default { getAllPackages, getPackageByID, insertPackages, updatePackages, deletePackages}