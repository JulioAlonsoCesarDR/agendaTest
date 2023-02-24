import React from 'react'
import User from './User'
import useUser from "../customHooks/useUser";

const ListUser = () => {

    const {users} = useUser();
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {users && users.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Lista de Usuarios</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra {''}
                        <span className="text-indigo-600 font-bold ">Usuarios</span>
                    </p>
                    {
                        users.map(user => {
                            return(
                                <User key={user.userId} user={user} />
                            )
                        } )
                    }
                </>

            ) : (
                <>
                   
                    <h2 className="font-black text-3xl text-center">No hay Usuarios</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-indigo-600 font-bold">
                        ¡ Agrega usuarios !
                    </p>
                </>
            )}
        </div>
    )
}

export default ListUser