export const Contacto = () => {
    return (
      <div className='contacto'>
        <h2 align='center'>Cuéntanos, ¿en qué te podemos ayudar?</h2>
        <form>
          <div>
            <label htmlFor="correo">Correo:</label>
            <input type='text' name='correo' id='correo' placeholder='nombre@ejemplo.com'/>
          </div>
          <div>
            <label htmlFor="desc">Descripción:</label>
            <textarea name='desc' id='desc'></textarea>
          </div>
        </form>
      </div>
    )
}