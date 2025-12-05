# 🚗 QuickToll - Electronic Toll Collection App

Aplicación móvil para facilitar el viaje de personas mediante la gestión electrónica de peajes en México. Permite recargar saldo, consultar peajes, ver precios y obtener ayuda mediante un chatbot integrado.

## 📋 Descripción

QuickToll es una aplicación escolar que busca modernizar el sistema de pago de peajes en México. Los usuarios pueden gestionar su saldo, consultar información de diferentes casetas de peaje, ver precios actualizados y resolver dudas a través de un chatbot inteligente.

## ✨ Características

- 💰 **Recarga de saldo** - Añade saldo a tu cuenta para pagar peajes
- 💳 **Gestión de tarjetas** - Administra tus métodos de pago
- 🚙 **Registro de vehículos** - Añade y gestiona tus vehículos
- 📍 **Mapa de peajes** - Visualiza los peajes en México y sus precios
- 📊 **Historial de pagos** - Consulta tu historial de transacciones
- 💬 **Chatbot integrado** - Resuelve tus dudas en tiempo real
- 👤 **Perfil de usuario** - Gestiona tu información personal
- 🔐 **Autenticación segura** - Login, registro y cambio de contraseña
- 📱 **Interfaz intuitiva** - Diseño amigable y fácil de usar

## 🛠️ Tecnologías

- **React Native** - Framework para desarrollo móvil multiplataforma
- **Expo** - Plataforma para desarrollo y despliegue
- **React Navigation** - Navegación entre pantallas
- **JavaScript/JSX** - Lenguaje de programación
- **Backend API** - Integración con servicios backend

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **npm** o **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- **Expo Go** (app móvil para testing)
- Un dispositivo Android/iOS o emulador

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd quicktoll
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno

Crear archivo `eas.json` o `.env` con las configuraciones necesarias:

```env
API_URL=https://api.quicktoll.com
API_KEY=your_api_key_here
```

### 4. Iniciar la aplicación

```bash
# Iniciar en modo desarrollo
npm start
# o
expo start

# Para Android
npm run android

# Para iOS
npm run ios
```

### 5. Escanear código QR

- Abre **Expo Go** en tu dispositivo móvil
- Escanea el código QR que aparece en la terminal
- La app se cargará en tu dispositivo

## 📁 Estructura del Proyecto

```
quicktoll/
├── .expo/                          # Archivos de configuración de Expo
├── .vscode/                        # Configuración de VS Code
├── Backend/                        # Archivos relacionados con el backend
├── ScreensImages/                  # Capturas de pantalla
├── android/                        # Configuración de Android
├── assets/                         # Recursos estáticos (imágenes, iconos)
├── components/                     # Componentes reutilizables
├── navigation/                     # Configuración de navegación
├── screens/                        # Pantallas de la aplicación
│   ├── Auth/                       # Pantallas de autenticación
│   │   ├── ChangePasswordScreen.jsx
│   │   ├── LogInScreen.jsx
│   │   ├── LogOutScreen.jsx
│   │   └── SignUpScreen.jsx
│   ├── Main/                       # Pantallas principales
│   │   ├── AddBalancesScreen.jsx
│   │   ├── AddCardScreen.jsx
│   │   ├── AddVehicleScreen.jsx
│   │   ├── EditInfVehiclesScreen.jsx
│   │   ├── HistoryScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── PaymentsMethodsScreen.jsx
│   │   ├── PaymentsScreen.jsx
│   │   ├── SettingsScreen.jsx
│   │   ├── UserScreen.jsx
│   │   ├── VehicleScreen.jsx
│   │   └── WelcomeScreen.jsx
│   └── Support/
│       └── SplashScreen.jsx
├── .gitignore
├── app.json                        # Configuración de la app
├── eas.json                        # Configuración de Expo Application Services
├── index.js                        # Punto de entrada
├── package.json                    # Dependencias del proyecto
├── package-lock.json
└── README.md
```

## 📱 Pantallas de la Aplicación

### 🔐 Autenticación
- **Welcome Screen** - Pantalla de bienvenida inicial
- **Login Screen** - Inicio de sesión
- **Sign Up Screen** - Registro de nuevos usuarios
- **Change Password Screen** - Cambio de contraseña
- **Splash Screen** - Pantalla de carga

### 🏠 Principales
- **Home Screen** - Dashboard principal
- **User Screen** - Perfil del usuario
- **Settings Screen** - Configuración de la app

### 💰 Gestión Financiera
- **Add Balance Screen** - Recarga de saldo
- **Add Card Screen** - Añadir métodos de pago
- **Payment Methods Screen** - Gestión de tarjetas
- **Payments Screen** - Realizar pagos
- **History Screen** - Historial de transacciones

### 🚗 Vehículos
- **Vehicle Screen** - Lista de vehículos
- **Add Vehicle Screen** - Registrar nuevo vehículo
- **Edit Vehicle Screen** - Editar información del vehículo

## 🎨 Capturas de Pantalla

> Agregar capturas de pantalla de las principales funcionalidades

## 🔌 Funcionalidades Principales

### 1. Autenticación de Usuarios

```javascript
// Ejemplo de login
const handleLogin = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    // Guardar token y navegar
  } catch (error) {
    console.error('Error en login:', error);
  }
};
```

### 2. Recarga de Saldo

- Seleccionar monto a recargar
- Elegir método de pago
- Confirmar transacción
- Actualizar saldo en tiempo real

### 3. Gestión de Vehículos

- Registrar vehículos con placas, modelo, color
- Editar información del vehículo
- Eliminar vehículos
- Asociar vehículos a peajes

### 4. Consulta de Peajes

- Ver lista de peajes en México
- Consultar precios por tipo de vehículo
- Ver ubicación en mapa
- Información de horarios y servicios

### 5. Historial de Pagos

- Ver transacciones realizadas
- Filtrar por fecha
- Descargar comprobantes
- Ver detalles de cada pago

### 6. Chatbot de Soporte

- Respuestas automáticas a preguntas frecuentes
- Información sobre peajes
- Asistencia con problemas comunes
- Disponible 24/7

## 🔧 Scripts Disponibles

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  }
}
```

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-native": "^0.x",
    "expo": "^49.x",
    "@react-navigation/native": "^6.x",
    "@react-navigation/stack": "^6.x",
    "expo-status-bar": "~1.x",
    "react-native-screens": "~3.x",
    "react-native-safe-area-context": "~4.x"
  }
}
```

## 🚦 Flujo de Usuario

### Primer Uso
1. **Bienvenida** → Usuario ve la pantalla de bienvenida
2. **Registro** → Crea una cuenta con email y contraseña
3. **Login** → Inicia sesión en la aplicación
4. **Onboarding** → Tutorial breve de funcionalidades

### Uso Regular
1. **Home** → Dashboard con saldo actual y accesos rápidos
2. **Recargar** → Añadir saldo a la cuenta
3. **Registrar Vehículo** → Añadir vehículos para usar en peajes
4. **Consultar Peajes** → Ver peajes disponibles y precios
5. **Pagar** → Realizar pagos en peajes
6. **Historial** → Revisar transacciones pasadas

## 🗺️ Peajes Incluidos

La aplicación incluye información de principales autopistas de México:

- **Autopista México-Querétaro**
- **Autopista México-Cuernavaca**
- **Autopista México-Puebla**
- **Arco Norte**
- **Autopista del Sol**
- Y más...

## 💡 Casos de Uso

### Usuario Final
- Recargar saldo antes de viajar
- Pagar peajes sin efectivo
- Consultar precios de peajes
- Ver historial de viajes
- Gestionar múltiples vehículos

### Administrador (Futuro)
- Gestionar catálogo de peajes
- Actualizar precios
- Ver estadísticas de uso
- Gestionar usuarios

## 🐛 Troubleshooting

### Error: Metro Bundler no inicia

```bash
# Limpiar caché
expo start -c
```

### Error: No se puede conectar al dispositivo

- Verificar que el dispositivo esté en la misma red WiFi
- Reiniciar Expo Go
- Verificar que el firewall no bloquee la conexión

### Error al instalar dependencias

```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install
```

### App no se actualiza en el dispositivo

```bash
# Limpiar caché y reiniciar
expo start -c
```

## 🚀 Despliegue

### Build para Android

```bash
# Con EAS Build
eas build --platform android
```

### Build para iOS

```bash
# Con EAS Build (requiere cuenta de desarrollador Apple)
eas build --platform ios
```

### Publicar actualización

```bash
expo publish
```

## 🔐 Seguridad

- 🔒 Contraseñas encriptadas
- 🔑 Tokens JWT para autenticación
- 💳 Datos de tarjetas protegidos (PCI DSS compliance)
- 🛡️ Validación de datos en cliente y servidor
- 📱 Comunicación HTTPS

## 🎯 Roadmap

### Versión 1.0 (Actual)
- ✅ Autenticación de usuarios
- ✅ Gestión de saldo y tarjetas
- ✅ Registro de vehículos
- ✅ Consulta de peajes
- ✅ Historial de pagos
- ✅ Chatbot básico

### Versión 2.0 (Futuro)
- 🔲 Pagos con QR en peajes
- 🔲 Notificaciones push
- 🔲 Integración con GPS
- 🔲 Compartir viajes
- 🔲 Programa de recompensas
- 🔲 Soporte multi-idioma

## 🤝 Contribuir

Este es un proyecto escolar, pero las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 👨‍🎓 Información del Proyecto

**Tipo:** Proyecto escolar  
**Objetivo:** Facilitar el viaje de personas mediante gestión electrónica de peajes  
**Estado:** Prototipo funcional  
**Plataforma:** iOS y Android

## 👥 Equipo

- Alejandro Alejandre Tafolla - Desarrollador Principal
- Yahir Camargo Flores - Desarrollador Principal


## 📝 Licencia

Este proyecto es de uso educativo y con fines de aprendizaje.

## 📧 Contacto

Para preguntas o sugerencias sobre el proyecto, contactar a través de GitHub Issues.

## 🙏 Agradecimientos

- Profesores y mentores del proyecto
- Comunidad de React Native
- Documentación de Expo
- Usuarios beta testers

---

⭐ Proyecto escolar - QuickToll Electronic Toll Collection 🚗💨
