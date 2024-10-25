import IRegisterCredentials from "../models/IRegisterCredentials";

class RegisterService {
  async registerUser(user: IRegisterCredentials): Promise<any> {
    try {
      const response = await fetch('http://192.168.1.67:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.status !== 200) {
        const errorText = await response.text();
        throw new Error(`Error en el registro del usuario: ${errorText}`);
      }

      return response.json();
    } catch (error) {
        throw new Error('Error en el registro del usuario');
    }
  }
}

export default RegisterService;
