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

    if (members.length === 0) {
        return <div>Loading family members...</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Family Members</h2>
            <ul className="space-y-2">
                {members.map((member, index) => (
                    <li key={index} className="bg-white p-2 rounded shadow">
                        <div>Name: {member.name}</div>
                        <div className="">Profile: {member.profile}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}