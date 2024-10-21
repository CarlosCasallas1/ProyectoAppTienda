// UI/Profile.ts
export interface UserProfile {
  id: number; // Cambiado a número para coincidir con tu ejemplo
  firstName: string; // Cambiado a firstName
  lastName: string; // Añadido lastName
  email: string;
  birthDate: string; // Formato AAAA/MM/DD
  profilePicture: string; // URL de la imagen
  department: string;
  city: string;
  password: string; // Nueva variable para la contraseña
}

export const Profiles: UserProfile[] = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'Juan@gmail.com',
    birthDate: '1985/05/15',
    profilePicture: 'https://media.istockphoto.com/id/1338284320/es/foto/mugshot-de-hombre-adulto-maduro-con-cabello-largo-y-rizado-y-barba.jpg?s=612x612&w=0&k=20&c=KHZ7TCBU4QRTW5pULbooz32JCWMOLJ9-I6rHgwtKmDE=',
    password: 'Juan123!', // Contraseña de ejemplo
    department: 'Antioquia',
    city: 'Medellín'
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'García',
    email: 'Maria@gmail.com',
    birthDate: '1990/08/22',
    profilePicture: 'https://media.istockphoto.com/id/1311285222/es/vector/hermosa-mujer-de-pelo-largo-piel-perfecta-hermosa-jovencita-vista-lateral.jpg?s=612x612&w=0&k=20&c=dxpRQIlTPEmlFdRkW8pcjbpv4qSQCTeOQ2iW6NxEQr8=',
    password: 'Maria#2020', // Contraseña de ejemplo
    department: 'Cundinamarca',
    city: 'Bogotá'
  },
  {
    id: 3,
    firstName: 'Carlos',
    lastName: 'Lopez',
    email: 'Carlos@gmail.com',
    birthDate: '1995/12/01',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1kSHx-_KlZuc1wwMrEt5Sn9qV0U-77VPsw&s',
    password: 'Carlos@123', // Contraseña de ejemplo
    department: 'Valle del Cauca',
    city: 'Cali'
  },
  {
    id: 4,
    firstName: 'John',
    lastName: 'Doe',
    email: 'John@gmail.com',
    birthDate: '1990/01/01',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1kSHx-_KlZuc1wwMrEt5Sn9qV0U-77VPsw&s',
    password: 'John#Doe1', // Contraseña de ejemplo
    department: 'Antioquia',
    city: 'Medellín'
  },
  {
    id: 5,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'Jane@gmail.com',
    birthDate: '1992/02/02',
    profilePicture: 'https://media.istockphoto.com/id/1311285222/es/vector/hermosa-mujer-de-pelo-largo-piel-perfecta-hermosa-jovencita-vista-lateral.jpg?s=612x612&w=0&k=20&c=dxpRQIlTPEmlFdRkW8pcjbpv4qSQCTeOQ2iW6NxEQr8=',
    password: 'Jane2021!', // Contraseña de ejemplo
    department: 'Caldas',
    city: 'Manizales'
  },
  {
    id: 6,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'Alice@gmail.com',
    birthDate: '1988/03/03',
    profilePicture: 'https://media.istockphoto.com/id/1311285222/es/vector/hermosa-mujer-de-pelo-largo-piel-perfecta-hermosa-jovencita-vista-lateral.jpg?s=612x612&w=0&k=20&c=dxpRQIlTPEmlFdRkW8pcjbpv4qSQCTeOQ2iW6NxEQr8=',
    password: 'Alice#1988', // Contraseña de ejemplo
    department: 'Santander',
    city: 'Bucaramanga'
  },
  {
    id: 7,
    firstName: 'Felipe',
    lastName: 'Brown',
    email: 'Felipe@gmail.com',
    birthDate: '1985/04/04',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1kSHx-_KlZuc1wwMrEt5Sn9qV0U-77VPsw&s',
    password: 'Felipe@2023', // Contraseña de ejemplo
    department: 'Atlántico',
    city: 'Barranquilla'
  },
  {
    id: 8,
    firstName: 'Charlie',
    lastName: 'Black',
    email: 'Charlie@gmail.com',
    birthDate: '1995/05/05',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1kSHx-_KlZuc1wwMrEt5Sn9qV0U-77VPsw&s',
    password: 'Charlie!2025', // Contraseña de ejemplo
    department: 'Bolívar',
    city: 'Cartagena'
  },
];
