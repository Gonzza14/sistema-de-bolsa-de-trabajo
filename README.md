# Sistema de bolsa de trabajo
<h2>Instalacion de la API RESTful:</h2>
<p>Entrar en la carpeta api e instalar dependencias</p>
<pre>
    <code>npm install</code>
</pre>
<p>Crear archivo .env con el siguiente codigo:</p>
<pre>
    <code>
        PG_HOST=127.0.0.1
        PG_USER=
        PG_DATABASE=sbtdb
        PG_PASSWORD=
        PG_PORT=5432
    </code>
</pre>
<p>Correr servidor en modo de desarrollo</p>
<pre>
    <code>npm run dev</code>
</pre>
<h2>Instalacion del cliente:</h2>
<p>Entrar en la carpeta cliente e instalar las dependencias</p>
<pre>
    <code>npm install</code>
</pre>
<p>Correr React en el cliente</p>
<pre>
    <code>npm run dev</code>
</pre>
<h2>ORM Sequelize:</h2>
<p>Para crear un modelo se debe ejecutar el siguiente comando:</p>
<pre>
    <code>npx sequelize-cli model:generate --name NombreModelo --attributes  atributoUno:string, atributoDos:string, atributoTres:string</code>
</pre>
<p>Correr migraciones:</p>
<pre>
    <code>npx sequelize-cli db:migrate</code>
</pre>
<p> Deshacer migraciones </p>
<pre>
    <code>npx sequelize-cli db:migrate:undo</code>
</pre>
<p>Revertir todas las migraciones</p>
<pre>
    <code>npx sequelize-cli db:migrate:undo:all</code>
</pre>

<p>Revertir hasta una migracion especifica</p>
<pre>
    <code>npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js</code>
</pre>