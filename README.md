<<<<<<< HEAD
ARQUETYPE FRONTEND VISUAL LIMES

**INSTALACION:**

1.Descargar la ultima versión de node.
2.Descargar el proyecto y posicionarse en el.
3.Ejecutar: npm install
4.Ejecutar: 
    - npm run dev: Para ejecutar el proyecto en modo desarrollo.
    - npm run start: Para ejecutar el proyecto pre-renderizado.
    - npm run build: Para ejecutar la compilación del proyecto en archivos estaticos.
5. Ir a http://localhost:3000


> Estrutura del proyecto:

**components**: En esta carpeta se guardan todos aquellos componentes que pertencen de manera directa al proyecto que se este creando. Se deberia llevar una estructura para llevar un orden. Ejemplo:

=> components (Folder)
=========> ExampleComponent (Folder)
==============> index.js : Se usara para indexar automaticamente el componente.
==============> ExampleComponent.js => Codigo del componente.
==============> ExampleComponent.scss => Estilos del componente.
==============> ExampleComponent.stories.js => Fichero encargado de cargar el componente en el storybook.

=> constants (Folder): En el guardaremos todos aquello ficheros responsables de definir constantes dentro de la aplicación.

=> locale (Folder): En esta carpeta se cargaran todos aquellos ficheros json encargados de mantener las traducciónes dentro de la aplicación.

=> Pages (Folder): En el se define tanto como las páginas de nuestra aplicación, así como toda aquella configuración relacionada con la api.

=> Redux (Folder): En esta carpeta se ubican todos los archivos relacionos a la configuración del store de nuestra aplicación. En el crearemos los reducers, actions y todo lo necesario para el funcionamiento del mismo.

=> Services (Folder): Aqui se guardan todos aquellos ficheros relacionados con las peticiones al servidor.

=> Stylrd (Folder): En ella encontramos todos los ficheros relacionados a los estilos y clases scss, relacionadas con la aplicación.


=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
>>>>>>> f9adbab (Initial commit from Create Next App)
