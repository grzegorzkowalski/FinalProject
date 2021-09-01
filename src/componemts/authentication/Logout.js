import React, {useState} from "react";
import {Card, Button, Alert, } from "react-bootstrap";
import {useAuth} from "../../AuthContext";
import {Link, useHistory} from "react-router-dom";
import HeaderNav from "../home/HeaderNav";

export default function Logout() {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    
    async function handleLogout() {
        setError("")
    
        try {
            await logout()
            history.push('/login')
        } catch {
            setError("Nie udało się zalogować")
        }
    }

    return (
        <>
            <HeaderNav/>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profil</h2>

                    <strong>Email:</strong>
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Edytuj profil</Link>
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">Wyloguj</div>
                <Button variant="link">Wyloguj</Button>
            </>
    )
}