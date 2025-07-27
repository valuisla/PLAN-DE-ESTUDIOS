/* Estilos Generales */
:root {
    --color-fondo: #f0f2f5;
    --color-texto: #333;
    --color-borde: #dfe4ea;
    --color-asignatura: #ffffff;
    --color-aprobado: #e6ffed;
    --color-texto-aprobado: #28a745;
    --color-borde-aprobado: #28a745;
    --color-bloqueado: #f8f9fa;
    --color-texto-bloqueado: #6c757d;
    --color-primario: #0056b3;
    --sombra: 0 4px 6px rgba(0, 0, 0, 0.07);
}

body {
    font-family: 'Lato', sans-serif;
    background-color: var(--color-fondo);
    color: var(--color-texto);
    margin: 0;
    padding: 2em;
    text-align: center;
}

.header-main h1 {
    color: var(--color-primario);
}

/* Contenedor de la Malla */
.malla-container {
    display: flex;
    flex-direction: row;
    gap: 1.5em;
    justify-content: center;
    flex-wrap: wrap; /* Permite que los semestres se reordenen en pantallas pequeñas */
    padding: 1em 0;
}

/* Columnas de Semestres */
.semestre-columna {
    flex: 1; /* Permite que las columnas crezcan */
    min-width: 240px; /* Ancho mínimo para cada columna */
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.semestre-titulo {
    font-weight: 700;
    font-size: 1.3em;
    color: var(--color-primario);
    padding-bottom: 0.5em;
    border-bottom: 3px solid var(--color-primario);
    margin-bottom: 0.5em;
}

/* Estilos de las Asignaturas (Ramos) */
.asignatura {
    background-color: var(--color-asignatura);
    border: 1px solid var(--color-borde);
    border-left: 5px solid #007bff;
    padding: 1em;
    border-radius: 8px;
    box-shadow: var(--sombra);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-align: left;
}

.asignatura:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.asignatura-id {
    font-size: 0.85em;
    font-weight: 700;
    color: #888;
    margin-bottom: 0.3em;
}

.asignatura-nombre {
    font-weight: 700;
}

/* Estado: Aprobado */
.asignatura.aprobado {
    background-color: var(--color-aprobado);
    border-color: var(--color-borde-aprobado);
    border-left-color: var(--color-borde-aprobado);
}

.asignatura.aprobado .asignatura-nombre {
    text-decoration: line-through;
    color: var(--color-texto-aprobado);
}

/* Estado: Bloqueado */
.asignatura.bloqueado {
    background-color: var(--color-bloqueado);
    color: var(--color-texto-bloqueado);
    border-left-color: var(--color-texto-bloqueado);
    cursor: not-allowed;
    opacity: 0.8;
}

/* Notificaciones */
.notificacion {
    padding: 1em;
    margin: 0 auto 1.5em auto;
    max-width: 900px;
    border-radius: 8px;
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
    font-weight: 700;
    box-shadow: var(--sombra);
}

/* Botón de Reinicio */
.reset-button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 0.8em 1.5em;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9em;
    transition: background-color 0.2s;
    margin-top: 1em;
}

.reset-button:hover {
    background-color: #c82333;
}
