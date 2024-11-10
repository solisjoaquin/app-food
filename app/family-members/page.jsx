'use client';
import { useEffect, useState } from 'react';

export default function FamilyMembers() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('/api/family')
            .then(response => response.json())
            .then(data => setMembers(data))
            .catch(error => console.error('Error fetching family members:', error));
    }, []);

    const perfiles = (deficiencia) => {
        if (deficiencia == 1){
            return "Flexible"
        } else if (deficiencia == 2){
            return "Vegetariano"
        } else if (deficiencia == 3){
            return "Vegano"
        } else if (deficiencia == 4){
            return "Inflexible por salud"
        }

        return "No definido"
    }

    if (members.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Miembros de la familia</h2>
            <ul className="space-y-2">
                {members.map((member, index) => (
                    <li key={index} className="bg-white p-2 rounded shadow">
                        
                        <div className="">Nombre: {member.nombre}</div>
                        <div className="">Perfil: {perfiles(member.perfil_alimenticio)}</div>
                        {member.deficiencia? <div className="text-[#24C690]">Condicion: {member.deficiencia}</div>: null}
                    </li>
                ))}
            </ul>
        </div>
    );
}