# Clase1


Descripción breve del proyecto:
Este es mi primer proyecto hecho en Angular para el curso.


○ Instrucciones para clonar, instalar dependencias (npm install) y ejecutar (ng serve).

PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1> ng new clase-1 
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1> cd C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1> ng serve
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1> npm install
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1> ng g c componente1


○ Capturas de pantalla mostrando la app en funcionamiento.

○ Créditos del autor (nombre del estudiante, curso, unidad).
Cristian Gentile
Curso Angular
Unidad 1

○ Citación de fuentes en el README.md (bibliografía y créditos de imágenes si corresponde).


2. Exploración de la estructura.
○ Identificar las carpetas y archivos más importantes:
■ src/app
La carpeta src/app es el núcleo de la aplicación. Allí se encuentra el módulo principal (AppModule) y el componente raíz (AppComponent).
Aquí viven los componentes, servicios, módulos y toda la lógica de la app.

■ app.component.ts
Es un archivo de clase TypeScript donde se define la lógica del componente.
Es el componente principal, que actúa como contenedor raíz de la aplicación. Este componente se asocia a la etiqueta <app-root> que se encuentra en index.html.

■ app.module.ts
Es el módulo raíz (AppModule) que agrupa todos los componentes, servicios y dependencias de la aplicación. A la par, define qué componentes se cargan y qué módulos se importan

■ assets/
Carpeta pública para recursos estáticos como imágenes,íconos o fuentes

■ environments/
Archivos de configuración para diferentes entornos (desarrollo, producción)






## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
