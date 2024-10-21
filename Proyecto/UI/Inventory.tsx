import React, { useState } from 'react';
import { Image, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import inventoryStyles from '../src/styles/InventoryStyles'; // Renombrar la importación

export type Product = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  type: string;
  year: string;
  price: number;
  available: boolean;
  discount: number;
};


export const Products: Product[] = [
  {
    id: 1,
    title: 'Calzado',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfSBC2UcAsyoFfvr8aN258p1fhiI1YaYRbOmuRvQT22NSdGjIVg3vrCL_CeYGNxk8vyt09Lb6cDRkaXYozBZQDoevOLyysj1hquUIF5nRdUi5jlt7kB2fkUyN28ROMvOl79tXYWw&usqp=CAc',
    description: 'Tenis de hombre Nike, ligeros y cómodos, diseñados para ofrecer soporte y estilo.',
    type: 'Nike Air Moarch I0V',
    year: '2020',
    price: 350000,
    available: true,
    discount: 5,
  },
  {
    id: 2,
    title: 'Electronica',
    imageUrl: 'https://mac-center.com/cdn/shop/files/iPhone_13_Pro_Sierra_Blue_PDP_Image_position-1A__CLCO_v1_0be180ca-e4c0-4416-9ef7-64245ff7e2e5.jpg?v=1700292348',
    description: 'El último modelo de iPhone con cámara mejorada y rendimiento excepcional.',
    type: 'iPhone 13 Pro',
    year: '2021',
    price: 4600000,
    available: false,
    discount: 30,
  },
  {
    id: 3,
    title: 'Juguetes',
    imageUrl: 'https://ss424.liverpool.com.mx/sm/1155896864.jpg',
    description: 'Juguete del Hombre Araña, detallado y articulado, ideal para recrear aventuras épicas y fomentar la imaginación de los niños.',
    type: 'Jugete del hombre araña',
    year: '2021',
    price: 11000000,
    available: true,
    discount: 0,
  },
  {
    id: 4,
    title: 'Hogar',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_886377-MLU73688207188_012024-O.webp',
    description: 'Silla ergonómica con soporte lumbar y diseño moderno, ideal para largas jornadas de trabajo.',
    type: 'Silla Ergonómica X-Chair',
    year: '2022',
    price: 800000,
    available: true,
    discount: 60,
  },
  {
    id: 5,
    title: 'Libro',
    imageUrl: 'https://tiendateatral.com/27089-medium_default/libro-satanas-mario-mendoza.jpg',
    description: '"Satanás" de Mario Mendoza narra cómo el mal y la desesperanza afectan a tres personajes en Bogotá, culminando en un trágico desenlace.',
    type: 'Edicion Planeta',
    year: '2002',
    price: 800000,
    available: true,
    discount: 0,
  },
];

interface InventoryProps {
  onSelect?: (product: Product) => void;
  searchQuery?: string; // Nueva prop para el término de búsqueda
}

const Inventory: React.FC<InventoryProps> = ({ onSelect, searchQuery }) => {
  const [comments, setComments] = useState<string>('');
  const [rating, setRating] = useState<number | null>(null);
  const [question, setQuestion] = useState<string>('');

  const handleCommentSubmit = () => {
    if (comments.length > 200) {
      Alert.alert('Error', 'Los comentarios deben tener un máximo de 200 caracteres.');
      return;
    }
    Alert.alert('Comentario enviado', 'Gracias por tu comentario.');
    setComments('');
  };
  

  const handleQuestionSubmit = () => {
    console.log('Longitud de la pregunta:', question.length); // Depuración
    if (question.length > 100) {
      Alert.alert('Error', 'Las preguntas deben tener un máximo de 100 caracteres.');
      return;
    }
    Alert.alert('Pregunta enviada', 'Gracias por tu pregunta.');
    setQuestion('');
  };
  
  

  const handleRatingSubmit = () => {
    if (rating === null) {
      Alert.alert('Error', 'Por favor selecciona una calificación entre 1 y 5.');
      return;
    }
    Alert.alert('Calificación enviada', 'Gracias por tu calificación.');
    setRating(null);
  };

  // Filtrar productos basados en el searchQuery
  const filteredProducts = searchQuery
    ? Products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : Products;

  return (
    <ScrollView>
      {filteredProducts.map(product => (
        <TouchableOpacity
          style={inventoryStyles.container} // Usar el nuevo nombre aquí
          key={product.id}
          onPress={() => onSelect && onSelect(product)}
        >
          <Text style={inventoryStyles.title}>{product.title}</Text>
          <Image source={{ uri: product.imageUrl }} style={inventoryStyles.img} />
          <View style={inventoryStyles.container}>
            <Text style={[inventoryStyles.title, inventoryStyles.description]}>{product.description}</Text>
            <Text style={[inventoryStyles.title, inventoryStyles.description, inventoryStyles.data]}>Tipo: {product.type}</Text>
            <Text style={[inventoryStyles.title, inventoryStyles.description, inventoryStyles.data]}>Año: {product.year}</Text>
            <Text style={[inventoryStyles.title, inventoryStyles.description, inventoryStyles.data]}>Precio: ${product.price}</Text>
            <Text style={[inventoryStyles.title, inventoryStyles.description, inventoryStyles.data]}>
              Estado: {product.available ? 'Disponible' : 'No disponible'}
            </Text>
            <Text style={[inventoryStyles.title, inventoryStyles.description, inventoryStyles.data]}>
              Descuento: {product.discount}%
            </Text>

            {/* Caja de preguntas */}
            <TextInput
              style={inventoryStyles.input}
              placeholder="Haz una pregunta (máx. 100 caracteres)"
              value={question}
              onChangeText={setQuestion}
              maxLength={100}
            />
            <TouchableOpacity onPress={handleQuestionSubmit}>
              <Text style={[inventoryStyles.buttonText, { color: 'black' }]}>Enviar Pregunta</Text>
            </TouchableOpacity>

            {/* Caja de comentarios */}
            <TextInput
  style={inventoryStyles.input}
  placeholder="Agrega un comentario (máx. 200 caracteres)"
  value={comments}
  onChangeText={setComments}
  maxLength={200}
/>

            <TouchableOpacity onPress={handleCommentSubmit}>
              <Text style={[inventoryStyles.buttonText, { color: 'black' }]}>Enviar Comentario</Text>
            </TouchableOpacity>

            {/* Calificación */}
            <View style={inventoryStyles.ratingContainer}>
              <Text>Calificación (1-5):</Text>
              {[1, 2, 3, 4, 5].map(num => (
                <TouchableOpacity key={num} onPress={() => setRating(num)}>
                  <Text style={rating === num ? inventoryStyles.selectedRating : inventoryStyles.rating}>{num}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={handleRatingSubmit}>
                <Text style={[inventoryStyles.buttonText, { color: 'black' }]}>Enviar Calificación</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Inventory;



