export interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: string;
}

export interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: "tortas",
    nombre: "🎂 Tortas Especiales",
    items: [
      {
        nombre: "Torta Helada Tradicional",
        descripcion: "Bizcochuelo esponjoso con capas de gelatina de fresa y suave crema de chantilly artesanal.",
        precio: "S/. 45.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Torta Tres Leches de Lúcuma",
        descripcion: "Bizcocho bañado en mezcla cremosa de tres leches infusionada con lúcuma peruana pura.",
        precio: "S/. 50.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Torta Selva Negra D'Pilitas",
        descripcion: "Bizcochuelo de cacao intenso, relleno de cerezas marrasquino y crema chantilly supreme.",
        precio: "S/. 55.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Torta Red Velvet Supreme",
        descripcion: "Suave bizcocho rojo aterciopelado con relleno y cobertura de frosting de queso crema especial.",
        precio: "S/. 60.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Torta Chocolate Fudge de la Casa",
        descripcion: "Bizcocho extra húmedo cubierto y relleno con fudge artesanal preparado con puro cacao.",
        precio: "S/. 48.00",
        imagen: "/logo.png"
      }
    ]
  },
  {
    id: "postres",
    nombre: "🍰 Postres & Porciones",
    items: [
      {
        nombre: "Pie de Limón Artesanal",
        descripcion: "Masa quebradiza artesanal rellena de crema ácida de limón criollo y merengue suizo dorado.",
        precio: "S/. 12.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Cheesecake de Maracuyá",
        descripcion: "Base crocante de galleta con crema suave de queso y coulis brillante de maracuyá.",
        precio: "S/. 14.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Crema Volteada de la Abuela",
        descripcion: "Clásica crema horneada a baño maría con caramelo rubio artesanal.",
        precio: "S/. 10.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Milhojas de Manjarblanco",
        descripcion: "Capas hojaldradas crujientes rellenas de abundante manjarblanco casero.",
        precio: "S/. 11.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Porción Torta Tres Leches",
        descripcion: "Porción individual súper húmeda, fresca y bañada en almíbar de tres leches.",
        precio: "S/. 13.00",
        imagen: "/logo.png"
      }
    ]
  },
  {
    id: "bocaditos",
    nombre: "🥐 Bocaditos & Pasabocas",
    items: [
      {
        nombre: "Caja de Alfajores Clásicos (6 unid)",
        descripcion: "Alfajorcitos deshacedores de maicena rellenos de puro manjarblanco y azúcar finísima.",
        precio: "S/. 15.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Trufas de Chocolate (6 unid)",
        descripcion: "Bocados de ganache de chocolate semi-amargo rodados en cacao en polvo de aroma.",
        precio: "S/. 14.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Cinnamon Roll de Canela",
        descripcion: "Roll de canela esponjoso horneado diariamente con glacé dulce de vainilla.",
        precio: "S/. 9.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Empanada Dulce de Manzana",
        descripcion: "Masa hojaldrada crujiente rellena de manzanitas caramelizadas con canela y clavo.",
        precio: "S/. 8.00",
        imagen: "/logo.png"
      }
    ]
  },
  {
    id: "bebidas",
    nombre: "☕ Cafés & Bebidas",
    items: [
      {
        nombre: "Chocolate Caliente D'Pilitas",
        descripcion: "Chocolate de cacao cusqueño al 70% infusionado con canela y clavo de olor.",
        precio: "S/. 10.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Cappuccino Italiano",
        descripcion: "Espresso concentrado de grano con leche creada a vapor y abundante espuma de leche.",
        precio: "S/. 9.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Chicha Morada Artesanal (500ml)",
        descripcion: "Preparada con maíz morado, piña, membrillo, manzana y toque de limón recién exprimido.",
        precio: "S/. 7.00",
        imagen: "/logo.png"
      },
      {
        nombre: "Jugo Especial Surtido",
        descripcion: "Mezcla energizante de papaya, plátano, fresa, leche y un chorrito de algarrobina.",
        precio: "S/. 10.00",
        imagen: "/logo.png"
      }
    ]
  }
];
