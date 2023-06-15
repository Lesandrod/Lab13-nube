Aplicación CRUD de la tabla estudiantes.
Lennard Idone

La base de datos es en PlanetScale.
Usa el servicio S3 para almacenar las imagenes.

para instalar la Aplicación:
- clonar el repositorio
- ingresar a la carpeta del proyecto
- en consola poner 'npm install'
- ejecutar con run dev


Preciamente creamos un archivo .env donde pondremos el acceso a nuestro servicio de AWS, S3 y Planetscale:

DATABASE_URL='mysql://****************:pscale_pw***********@aws.connect.psdb.cloud/++++++?ssl={"rejectUnauthorized":true}'
S3_BUCKET_NAME = nombre-bucket
S3_BUCKET_REGION = region-name
AWS_ACCESS_KEY_ID = acceso-access-key
AWS_SECRET_ACCESS_KEY = acceso-secret-key
