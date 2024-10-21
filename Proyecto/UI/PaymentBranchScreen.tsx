import React from 'react';
import { View } from 'react-native';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import styles from '../src/styles/PaymentBranchScreenStyles'; // Importación de los estilos

const CreateBranchScreen: React.FC = () => {
  const handleConfirm = () => {
    // Lógica para confirmar la creación de la sucursal
    console.log('Sucursal confirmada');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Owner name"
          style={styles.input}
        />
        <TextInput
          label="Branch name"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          label="Email"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          label="Branch Number"
          style={styles.input}
        />
        <TextInput
          label="Personal Identification"
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleConfirm}
          style={styles.button}
        >
          Confirm
        </Button>
      </View>
    </PaperProvider>
  );
};

export default CreateBranchScreen;











