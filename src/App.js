import './App.css';
import academloLogo from './imagenes/logo_academlo.png'
import ListaDeTareas from './components/ListaDeTareas';




function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='academlo-logo-contenedor'>
       <img src={academloLogo} className='academlo-logo' alt='text' />
      </div>
      <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
