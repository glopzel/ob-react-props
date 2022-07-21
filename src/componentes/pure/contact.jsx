import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {
    const [connectionState, setConnectionState] = useState(contact.connected)

    const connectedOrNot = () => setConnectionState(!(connectionState))

    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.lastName }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <div>
                <h5>
                    Conexión: { connectionState ? 'CONTACTO EN LINEA' : 'CONTACTO NO DISPONIBLE' }
                </h5>
                <button onClick={connectedOrNot}>
                    Click para cambiar estado
                </button>
            </div>
        </div>
    )

}

ContactComponent.propTypes = {
    task: PropTypes.instanceOf(Contact)
}

export default ContactComponent