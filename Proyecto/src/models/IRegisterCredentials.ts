  export default interface IRegisterCredentials {
    firstName: string;   // Cambiado de 'username' a 'firstName' si así lo requiere el backend
    email: string;
    password: string;
    birthDate: string;   // Fecha de nacimiento
    address: string;     // Dirección
    department: string;  // Departamento
    city: string;        // Ciudad
  }
