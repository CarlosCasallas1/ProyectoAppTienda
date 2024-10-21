// src/context/ProfileContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { UserProfile, Profiles } from '../../UI/Profile'; // Asegúrate de que la ruta sea correcta

interface ProfileContextType {
  profiles: UserProfile[];
  selectedProfile: UserProfile | null;
  setSelectedProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

// Crear el contexto con un valor predeterminado vacío
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);

  return (
    <ProfileContext.Provider value={{ profiles: Profiles, selectedProfile, setSelectedProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Hook para usar el contexto en cualquier parte de la aplicación
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
