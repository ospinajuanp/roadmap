import { useState } from "react";
import './ContentData.css'

const ContentData = () => {
    const [mostrarTodo, setMostrarTodo] = useState(false);

    return (
        <div className='contentData'>
            <div className='contentData-project'>
                <div className='contentData-project_title'>Proyectos</div>
                <div className='contentData-project_text'>
                    <a className='contentData-project_name' href="/pone">HTML Only CV</a>
                    <a className='contentData-project_name' href="/ptwo">Calculator</a>
                    <a className='contentData-project_name' href="/pthree">Quiz App</a>
                    <a className='contentData-project_name' href="/pfour">Countdown Timer</a>
                    <a className='contentData-project_name' href="/pfive">Product Upcoming Page</a>
                </div>
            </div>
            <div className='contentData-work'>
                <div>
                    <div className='contentData-work_title'>Experiencia</div>
                    <div className='contentData-work_text'>
                        <h3>Formador Agility RPA</h3>
                        <div>Marzo 2023 - Actualidad</div>
                        <div>Formador en Agility RPA, capacito a profesionales para optimizar procesos y mejorar la eficiencia con esta herramienta.</div>
                    </div>
                </div>
                <span className="linea"></span>
                <div>
                    <div className='contentData-work_title'>Apoyo</div>
                    <div className='contentData-work_text'>
                        Apoyo en la implementación de procesos RPA utilizando Agility RPA.
                    </div>
                </div>
            </div>
            <div className='contentData-education'>
                <div className='contentData-education_title'>Educación</div>
                <div className='contentData-education_text'>
                    <div className=''></div>
                    <div className='contentData-courses_title'>Cursos Realizados Platzi</div>
                    <div className={`contentData-courses ${mostrarTodo ? "mostrar" : ""}`} style={{ maxHeight: mostrarTodo ? "none" : "400px" }}>
                        <ul>
                            {/* Nivel 1 */}
                            <li>Básico de Computadores e Informática</li>
                            <li>Introducción a la Terminal y Línea de Comandos</li>
                            <li>Configuración de Entorno de Desarrollo en Linux/macOS/Windows</li>

                            {/* Nivel 2 */}
                            <li>Básico de Programación</li>
                            <li>Fundamentos de JavaScript</li>
                            <li>Fundamentos de Ingeniería de Software</li>
                            <li>Carrera - Fundamentos de Programación y Desarrollo Web</li>

                            {/* Nivel 3 */}
                            <li>Definitivo de HTML y CSS</li>
                            <li>Responsive Design: Maquetación Mobile First</li>
                            <li>Diseño para Developers</li>
                            <li>Animaciones con CSS</li>
                            <li>Transformaciones y Transiciones en CSS</li>
                            <li>CSS Grid Básico</li>
                            <li>Diseño Web con CSS Grid y Flexbox</li>
                            <li>Fundamentos de Sass: Crea tu Primera Landing Page</li>
                            <li>Profesional de CSS Grid Layout</li>

                            {/* Nivel 4 */}
                            <li>ECMAScript: Historia y Versiones de JavaScript</li>
                            <li>JavaScript Engine (V8) y el Navegador</li>
                            <li>Manipulación de Arrays en JavaScript</li>
                            <li>NPM: Gestión de Paquetes y Dependencias en JavaScript</li>
                            <li>API REST con Javascript: Fundamentos</li>
                            <li>Closures y Scope en JavaScript</li>
                            <li>Asincronismo con JavaScript</li>

                            {/* Nivel 5 */}
                            <li>Básico de Programación Orientada a Objetos con JavaScript</li>
                            <li>Intermedio de Programación Orientada a Objetos en JavaScript</li>

                            {/* Nivel 6 */}
                            <li>Frontend Developer</li>
                            <li>Webpack</li>

                            {/* Nivel 7 */}
                            <li>Profesional de Git y GitHub</li>
                        </ul>
                    </div>
                    <a className="ver-mas" onClick={() => setMostrarTodo(!mostrarTodo)}>
                        {mostrarTodo ? "Ver menos" : "Ver más"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContentData;