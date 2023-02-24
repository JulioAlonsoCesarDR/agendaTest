import React from 'react'
import useUser from '../customHooks/useUser'

const User = (user) => {
    const {name,phone,email,date, userId} = user.user
    const {onChangeDataUser, onChangeUsers, users} = useUser()
    
    const setUser = (user)=> {
        onChangeDataUser(user.user)
    }

     const deleteuser = () => {
        const userDeleted = users.filter(userSelected => userSelected.userId !== userId)
        onChangeUsers(userDeleted)
    }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Telefono: {''}
                <span className="font-normal normal-case">{phone}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Nacimiento: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>


            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setUser(user)} 
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={deleteuser}
                >Eliminar</button>
            </div>
        </div>
  )
}

export default User