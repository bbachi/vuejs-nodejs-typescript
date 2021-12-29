export class UserService {

    async getAllUsers() {

        const response = await fetch('/api/users');
        return await response.json();
    }
    
    async createUser(data: any) {
        const response = await fetch(`/api/user`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: data})
          })
        return await response.json();
    }
}