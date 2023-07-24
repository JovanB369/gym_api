import gymMemberRepository from "../repositories/gym-member-repository";

const getAllMembers = async () => {
    const data = await gymMemberRepository.getAllMembers(); 

    // data je niz objekata 
    const result: any = []; 
    data.forEach((member: any) => {
        result.push({
            id: member.id, 
            firstName: member.first_name, 
            lastName: member.last_name, 
            birthDate: member.birthdate, 
            adress: member.adress, 
            email: member.email, 
            phoneNumber:member.phone_number, 
            
        });
    })

    return result

}

const getMemberByID = async (id:number) => {
    const data = await gymMemberRepository.getMemberByID(id) 
    if (data && data.length > 0) {
        return {
            id: data[0].id, 
            firstName: data[0].first_name, 
            lastName: data[0].last_name, 
            birthDate: data[0].birthdate, 
            adress: data[0].adress, 
            email: data[0].email, 
            phoneNumber:data[0].phone_number, 
        };
    }

    return null; 
}

const insertMember = async (member: any) => {
    const result = await gymMemberRepository.insertMember(member); 
    return result; 
}

const updateMember = async (id: number, member: any) => {
    const result = await gymMemberRepository.updateMember(id,member); 
    return result; 
}

const deleteMember = async (id: number) => {
    const result = await gymMemberRepository.deleteMember(id); 
    return result; 
}

export default { getAllMembers, getMemberByID, insertMember, updateMember, deleteMember}