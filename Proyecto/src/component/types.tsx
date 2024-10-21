// Importa los tipos necesarios desde @react-navigation para la navegación por pestañas (BottomTabNavigator) y la navegación en pila (StackNavigator).

// Importa los tipos necesarios desde @react-navigation para la navegación por pestañas (BottomTabNavigator) y la navegación en pila (StackNavigator).
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

// Define el tipo de las rutas para el BottomTabNavigator. 
// Estas rutas representan las diferentes pestañas que se pueden navegar en la aplicación.
export type BottomTabParamList = {
  Confirmation: undefined; // Pantalla de confirmación, sin parámetros adicionales.
  MyPurchasesScreen: undefined; // Pantalla de historial de compras, sin parámetros adicionales.
  WhiteList: undefined; // Pantalla de lista de favoritos (WhiteList), sin parámetros adicionales.
  Cart: undefined; // Pantalla de carrito, sin parámetros adicionales.
  SupportScreen: undefined; // Pantalla de soporte, sin parámetros adicionales.
};

// Define el tipo de navegación para el BottomTabNavigator.
// Este tipo se utiliza para manejar la navegación entre las pestañas definidas en `BottomTabParamList`.
export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;

// Define el tipo de las rutas para el StackNavigator.
// Estas rutas representan las diferentes pantallas que se pueden navegar en la aplicación fuera del sistema de pestañas.
export type RootStackParamList = {
  Login: undefined; // Pantalla de inicio de sesión, sin parámetros adicionales.
  BottomTab: undefined; // Navegador de pestañas (BottomTabNavigator) que contiene las pestañas definidas en `BottomTabParamList`.
  Inventory: undefined; // Pantalla de inventario, sin parámetros adicionales.
  Confirmation: { products: Product[] }; // Pantalla de confirmación, que recibe un arreglo de productos como parámetro.
  Cart: undefined; // Pantalla de carrito, sin parámetros adicionales.
  RegisterScreen?: undefined; // Pantalla de registro, opcional, sin parámetros adicionales.
};

// Define el tipo de navegación para el StackNavigator.
// Este tipo se utiliza para manejar la navegación entre las pantallas definidas en `RootStackParamList`.
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

// Define el tipo de datos para un producto en la aplicación.
// Este tipo se utiliza para representar la información de un producto en las diferentes pantallas y componentes.
export type Product = {
  id: number; // Identificador único del producto.
  title: string; // Título o nombre del producto.
  imageUrl: string; // URL de la imagen del producto.
  description: string; // Descripción del producto.
  type: string; // Tipo o categoría del producto.
  year: string; // Año de lanzamiento o fabricación del producto.
  price: number; // Precio del producto.
};
