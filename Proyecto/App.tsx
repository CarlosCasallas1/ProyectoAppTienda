
import React from 'react';
// import firebase from 'firebase/compat/app';
// import { Database } from 'firebase/database';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importar vistas
import Cart from './UI/Cart';
import Login from './src/component/Login';
import Inventory from './UI/Inventory';
import Confirmation from './UI/Confirmation';
import RegisterScreen from './src/component/RegisterScreen';
import PaymentBranchScreen from './UI/PaymentBranchScreen';
import FavoritesScreen from './UI/FavoritesScreen';
import WhiteList from './UI/WhiteList';
import DiscountScreen from './UI/DiscountScreen';
import ProfileScreen from './UI/ProfileScreen';
import MyPurchasesScreen from './UI/MyPurchasesScreen'; // Nueva importación
import CategoriesScreen from './UI/shop/CategoriesScreen';
import SupportScreen from './UI/SupportScreen'; // Asegúrate de que la ruta sea correcta

// Importar los contextos
import { FavoritesProvider } from './src/context/FavoritesContext';
import { CartProvider } from './src/context/CartContext';
import { ProfileProvider } from './src/context/ProfileContext';
import { AuthProvider } from './src/context/AuthContext'; // Asegúrate de la ruta correcta

// Definir el tipo de Producto
export type Product = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  type: string;
  year: string;
  price: number;
};

// Definir el tipo de parámetros del Stack Navigator
export type RootStackParamList = {
  Cart: undefined;
  Login: undefined;
  Inventory: undefined;
  Confirmation: { products: Product[] };
  RegisterScreen: undefined;
  PaymentBranchScreen: undefined;
  FavoritesScreen: undefined;
  WhiteList: undefined;
  DiscountScreen: undefined;
  ProfileScreen: { username: string };
  MyPurchasesScreen: undefined; // Nueva pantalla
  CategoriesScreen: undefined; // Nueva pantalla de categorías
  SupportScreen: undefined; // Nueva pantalla de soporte
};

// Crear el Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <FavoritesProvider>
          <CartProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ title: 'Login' }}
                  />
                  <Stack.Screen
                    name='Confirmation'
                    component={Confirmation}
                    options={{ title: 'Products' }}
                  />
                  <Stack.Screen
                    name='MyPurchasesScreen' // Nueva pantalla
                    component={MyPurchasesScreen}
                    options={{ title: 'My Purchases' }}
                  />
                  <Stack.Screen
                    name='PaymentBranchScreen'
                    component={PaymentBranchScreen}
                    options={{ title: 'Branch Screen' }}
                  />
                  <Stack.Screen
                    name='Inventory'
                    component={Inventory}
                    options={{ title: 'Inventory' }}
                  />
                  <Stack.Screen
                    name='Cart'
                    component={Cart}
                    options={{ title: 'Cart' }}
                  />
                  <Stack.Screen
                    name='ProfileScreen'
                    component={ProfileScreen}
                    options={{ title: 'Profile' }}
                  />
                  <Stack.Screen
                    name='RegisterScreen'
                    component={RegisterScreen}
                    options={{ title: 'Register' }}
                  />
                  <Stack.Screen
                    name='FavoritesScreen'
                    component={FavoritesScreen}
                    options={{ title: 'Favorites' }}
                  />
                  <Stack.Screen
                    name='DiscountScreen'
                    component={DiscountScreen}
                    options={{ title: 'Discount Offers' }}
                  />
                  <Stack.Screen
                    name='WhiteList'
                    component={WhiteList}
                    options={{ title: 'Favorites List' }}
                  />
                  <Stack.Screen
                    name='CategoriesScreen' // Nueva pantalla de categorías
                    component={CategoriesScreen}
                    options={{ title: 'Categories' }}
                  />
                  <Stack.Screen
                    name='SupportScreen' // Nueva pantalla de soporte
                    component={SupportScreen}
                    options={{ title: 'Support' }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </SafeAreaProvider>
          </CartProvider>
        </FavoritesProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;




// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// // Importar vistas
// import Cart from './UI/Cart';
// import Login from './src/component/Login';
// import Inventory from './UI/Inventory';
// import Confirmation from './UI/Confirmation';
// import RegisterScreen from './src/component/RegisterScreen';
// import PaymentBranchScreen from './UI/PaymentBranchScreen';
// import FavoritesScreen from './UI/FavoritesScreen';
// import WhiteList from './UI/WhiteList';
// import DiscountScreen from './UI/DiscountScreen';
// import ProfileScreen from './UI/ProfileScreen';
// import MyPurchasesScreen from './UI/MyPurchasesScreen'; // Nueva importación

// // Importar los contextos
// import { FavoritesProvider } from './src/context/FavoritesContext';
// import { CartProvider } from './src/context/CartContext';
// import { ProfileProvider } from './src/context/ProfileContext';
// import { AuthProvider } from './src/context/AuthContext'; // Asegúrate de la ruta correcta

// // Definir el tipo de Producto
// export type Product = {
//   id: number;
//   title: string;
//   imageUrl: string;
//   description: string;
//   type: string;
//   year: string;
//   price: number;
// };

// // Definir el tipo de parámetros del Stack Navigator
// export type RootStackParamList = {
//   Cart: undefined;
//   Login: undefined;
//   Inventory: undefined;
//   Confirmation: { products: Product[] };
//   RegisterScreen: undefined;
//   PaymentBranchScreen: undefined;
//   FavoritesScreen: undefined;
//   WhiteList: undefined;
//   DiscountScreen: undefined;
//   ProfileScreen: { username: string };
//   MyPurchasesScreen: undefined; // Nueva pantalla
// };

// // Crear el Stack Navigator
// const Stack = createStackNavigator<RootStackParamList>();

// const App: React.FC = () => {
//   return (
//     <AuthProvider>
//       <ProfileProvider>
//         <FavoritesProvider>
//           <CartProvider>
//             <SafeAreaProvider>
//               <NavigationContainer>
//                 <Stack.Navigator>
//                   <Stack.Screen
//                     name='Login'
//                     component={Login}
//                     options={{ title: 'Login' }}
//                   />
//                   <Stack.Screen
//                     name='Confirmation'
//                     component={Confirmation}
//                     options={{ title: 'Products' }}
//                   />
//                   <Stack.Screen
//                     name='MyPurchasesScreen' // Nueva pantalla
//                     component={MyPurchasesScreen}
//                     options={{ title: 'Mis Compras' }}
//                   />
//                   <Stack.Screen
//                     name='PaymentBranchScreen'
//                     component={PaymentBranchScreen}
//                     options={{ title: 'Branch Screen' }}
//                   />
//                   <Stack.Screen
//                     name='Inventory'
//                     component={Inventory}
//                     options={{ title: 'Inventory' }}
//                   />
//                   <Stack.Screen
//                     name='Cart'
//                     component={Cart}
//                     options={{ title: 'Cart' }}
//                   />
//                   <Stack.Screen
//                     name='ProfileScreen'
//                     component={ProfileScreen}
//                     options={{ title: 'Profile' }}
//                   />
//                   <Stack.Screen
//                     name='RegisterScreen'
//                     component={RegisterScreen}
//                     options={{ title: 'Register' }}
//                   />
//                   <Stack.Screen
//                     name='FavoritesScreen'
//                     component={FavoritesScreen}
//                     options={{ title: 'Favorite' }}
//                   />
//                   <Stack.Screen
//                     name='DiscountScreen'
//                     component={DiscountScreen}
//                     options={{ title: 'Discount Offers' }}
//                   />
//                   <Stack.Screen
//                     name='WhiteList'
//                     component={WhiteList}
//                     options={{ title: 'Favorites List' }}
//                   />
//                 </Stack.Navigator>
//               </NavigationContainer>
//             </SafeAreaProvider>
//           </CartProvider>
//         </FavoritesProvider>
//       </ProfileProvider>
//     </AuthProvider>
//   );
// };

// export default App;
