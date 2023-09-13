import crypto from "crypto";

const allSellers = [
    {
        "id": crypto.randomUUID(),
        "nombre": "Homer Simpson",
        "correo": "homer@example.com",
        "telefono": "+1 (123) 456-7890",
        "direccion": "742 Evergreen Terrace, Springfield",
        "ciudad": "Springfield",
        "estado": "Illinois",
        "codigo_postal": "62701"
    },

    {
        "id": crypto.randomUUID(),
        "nombre": "Marge Simpson",
        "correo": "marge@example.com",
        "telefono": "+1 (555) 789-1234",
        "direccion": "123 Elm Street, Springfield",
        "ciudad": "Springfield",
        "estado": "Illinois",
        "codigo_postal": "62702"
    },

    {
        "id": crypto.randomUUID(),
        "nombre": "Bart Simpson",
        "correo": "bart@example.com",
        "telefono": "+1 (987) 654-3210",
        "direccion": "404 Oak Lane, Springfield",
        "ciudad": "Springfield",
        "estado": "Illinois",
        "codigo_postal": "62703"
    },

    {
        "id": crypto.randomUUID(),
        "nombre": "Lisa Simpson",
        "correo": "lisa@example.com",
        "telefono": "+1 (777) 888-9999",
        "direccion": "567 Maple Avenue, Springfield",
        "ciudad": "Springfield",
        "estado": "Illinois",
        "codigo_postal": "62704"
    },

    {
        "id": crypto.randomUUID(),
        "nombre": "Maggie Simpson",
        "correo": "maggie@example.com",
        "telefono": "+1 (222) 333-4444",
        "direccion": "101 Pine Street, Springfield",
        "ciudad": "Springfield",
        "estado": "Illinois",
        "codigo_postal": "62705"
    },

    {
        "id": crypto.randomUUID(),
        "nombre": "Ned Flanders",
        "correo": "ned@example.com",
        "telefono": "+1 (555) 123-4567",
        "direccion": "456 Oakdale Avenue, Springfield",
        "ciudad": "Springfield",
        "estado": "Illinois",
        "codigo_postal": "62706"
    }
]

export default allSellers