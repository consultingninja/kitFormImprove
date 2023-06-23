
export const actions={
    register: async ({request})=>{
        
        const form = await request.formData();
    
        const firstname = form.get('firstname')?? '';
        const lastname = form.get('lastname')?? '';
        const email = form.get('email')??'';
    
        const data = {
            firstname,
            lastname,
            email,
        };

        return {
            emailError: true,
            ...data
        }
        
    }
}