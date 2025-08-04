# 📘 Manual de Ejecución de Pruebas Automatizadas

Este manual describe los pasos para ejecutar las pruebas automatizadas desarrolladas con **Postman**, **Cypress** y **Katalon Studio** sobre una aplicación web que consume y expone una API REST. Asegúrate de tener previamente funcionando el frontend, backend y la base de datos restaurada desde `reqbdd.sql`.

---

## 🔶 1. Pruebas de API con Postman

### ✅ Requisitos

- Tener [Postman](https://www.postman.com/downloads/) instalado.
- Backend corriendo en `http://localhost:3000`.
- Base de datos activa y con datos iniciales.

### ▶️ Pasos de Ejecución

1. Abrir Postman.
2. Importar la colección:
   - `PruebasAPI.json`
3. Usar el “Runner” para ejecutar todos los endpoints:
   - Métodos **GET, POST, PUT, DELETE**
4. Verificar:
   - Códigos HTTP (200, 201, 404, etc.)
   - Contenido de respuestas JSON
   - Tiempos de respuesta
5. Exportar reporte si es necesario (HTML o JSON).

---

## 🔷 2. Pruebas End-to-End con Cypress 

### ✅ Requisitos

- Node.js y npm instalados.
- npm install cypress --save-dev
- Frontend ejecutándose localmente (`http://localhost:3000`).
- Backend y base de datos en funcionamiento.
- Carpeta `cypress/` con los scripts de prueba.
- Para iniciar el Cypress usaremos el comando "npx cypress open".
### ▶️ Instalación de Dependencias

```bash
npm install
```

---

## 🔷 3. Pruebas UI + API con Katalon Studio

### ✅ Requisitos

- Tener instalado [Katalon Studio](https://www.katalon.com/).
- Descargar el proyecto desde la carpeta `katalon/`.
- Tener backend y base de datos activos.

### ▶️ Pasos de Ejecución

1. Abrir Katalon Studio.
2. Seleccionar "Open Project" y abrir la carpeta `katalon/`.
3. Navegar a la pestaña **Test Cases** y abrir los scripts disponibles:
   - Registro de usuario
   - Inicio de sesión (login)
   - Validación de formularios
   - Pruebas de API REST
4. Ir a la pestaña **Test Suites**.
5. Ejecutar la suite de pruebas completa (botón derecho → Run).
6. Verificar los resultados desde:
   - Pestaña **Log Viewer**
   - Carpeta de reportes: `Reports/`
