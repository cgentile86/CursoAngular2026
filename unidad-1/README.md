# Clase1

* https://github.com/cgentile86/CursoAngular2026/tree/main/unidad-1

* Descripción breve del proyecto: 
Este es mi primer proyecto hecho en Angular para el curso.

* Instrucciones para clonar, instalar dependencias (npm install) y ejecutar (ng serve).
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1> ng new clase-1 
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1> cd C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1> ng serve
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1> npm install
PS C:\Users\Cristian\OneDrive\Escritorio\CursoAngular\Clase1\Ejercicio1\clase-1> ng g c componente1

* Capturas de pantalla mostrando la app en funcionamiento.
Captura guardada en: \unidad-1\capturas_pantalla

* Créditos del autor 
Cristian Gentile - Curso Angular - Unidad 1


2. Exploración de la estructura.
* Identificar las carpetas y archivos más importantes:
** src/app
La carpeta src/app es el núcleo de la aplicación. Allí se encuentra el módulo principal (AppModule) y el componente raíz (AppComponent).
Aquí viven los componentes, servicios, módulos y toda la lógica de la app.

** app.component.ts
Es un archivo de clase TypeScript donde se define la lógica del componente.
Es el componente principal, que actúa como contenedor raíz de la aplicación. Este componente se asocia a la etiqueta <app-root> que se encuentra en index.html.

** app.module.ts
Es el módulo raíz (AppModule) que agrupa todos los componentes, servicios y dependencias de la aplicación. A la par, define qué componentes se cargan y qué módulos se importan

** assets/
Carpeta pública para recursos estáticos como imágenes,íconos o fuentes

** environments/
Archivos de configuración para diferentes entornos (desarrollo, producción)