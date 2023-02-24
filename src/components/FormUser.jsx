
import React, { useState } from 'react'
import useUser from '../customHooks/useUser'


export default function FormUser() {
    const { user, onChangeDataUser, onChangeUsers, users } = useUser()

    const [error, setError] = useState(false)

    const handleChane = (e) => {
        onChangeDataUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }
    const userLocal = user
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random+fecha
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const {userId,name,phone,email,date}  = user
        if ([name,phone,email,date].includes('')) {
            setError(true)
            return;
        }
        setError(false)
   
        
        if(userId) {
            const userActual = users.map((userState) => userState.userId === userId ? userLocal : userState );
            onChangeUsers(userActual);
            onChangeDataUser({})

            
        } else {
            // Nuevo registro
            const id = generarId();
            const listUser = {...userLocal, userId: id }
            onChangeDataUser(listUser)
            onChangeUsers([...users, listUser])
        }   
        
        // Reiniciar el form
         onChangeDataUser({
            ...user,
            name:'',phone:'',email:'',date:'', userId:''
        }) 
    }

    return (
        <>
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <h2 className="font-black text-3xl text-center">Agenda de Usuarios</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Añade y Administralos {''}
                    <span className="text-indigo-600 font-bold "> Usuarios</span>
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                >
                    {
                        error && (
                            <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                                <p>Todos los campos son obligatorios</p>
                            </div>
                        )
                    }

                    <div className="mb-5">
                        <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
                            Nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Nombre completo"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={user.name}
                            onChange={(e) => handleChane(e)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="phone" className="block text-gray-700 uppercase font-bold">
                            Telefono
                        </label>
                        <input
                            id="phone"
                            type='tel'
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder="Telefono de Contacto"
                            value={user.phone}
                            onChange={(e) => handleChane(e)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email de Contacto"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={user.email}
                            onChange={(e) => handleChane(e)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                            Fecha de Nacimiento
                        </label>
                        <input
                            id="date"
                            type="date"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={user.date}
                            onChange={(e) => handleChane(e)}
                        />
                    </div>

                    <input
                        type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                        value={userLocal.userId? 'Editar usuario' : 'Agregar usuario'}
                    />
                </form>
            </div > 

        </>
    )
}
