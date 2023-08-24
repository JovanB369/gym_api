import packagesRepository from "../repositories/packages-repository";

const getAllPackages = async () => {
    const data = await packagesRepository.getAllPackages(); 

    // data je niz objekata 
    const result: any = []; 
    data.forEach((packages: any) => {
        result.push({
            id: packages.id, 
            name: packages.name,
            description: packages.description,
            price: packages.price,     
        });
    })

    return result

}

const getPackageByID = async (id:number) => {
    const data = await packagesRepository.getPackageByID(id) 
    if (data && data.length > 0) {
        return {
            id: data[0].id, 
            name: data[0].name,
            description: data[0].description,
            price: data[0].price, 
        };
    }

    return null; 
}

const insertPackages = async (packages: any) => {
    const result = await packagesRepository.insertPackages(packages); 
    return result; 
}

const updatePackages = async (packages: any, id: number) => {
    const result = await packagesRepository.updatePackages(packages,id); 
    return result; 
}

const deletePackages = async (id: any) => {
    const result = await packagesRepository.deletePackages(id); 
    return result; 
}

export default { getAllPackages, getPackageByID, insertPackages, updatePackages, deletePackages}