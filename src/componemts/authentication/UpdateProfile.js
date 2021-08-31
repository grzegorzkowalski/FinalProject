import React, {useRef, useState} from "react";
import {Form, Button, Card, Container, Alert} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {AuthProvider, useAuth} from "../../AuthContext";
import {Link, useHistory} from "react-router-dom";
import HeaderMain from "../home/HeaderMain";

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()
    const {currentUser, updatePassword, updateEmail} = useAuth
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    //
     function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfRef.current.value) {
            return setError("Passwords do not match")
        }
        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Nie udało się zaktualizować konta')
        }).finally(() => {
            setLoading(false)
        })
    
    }


    return (
        <>
            <HeaderMain/>
            <AuthProvider>
            <div className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Zaktualizuj dane</h2>
                                {error && <Alert variant="danger">{error}</Alert> }
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email}/>
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef}  placeholder="Leave blank to keep the same"/>
                                    </Form.Group>
                                    <Form.Group id="password-confirm">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control type="password" ref={passwordConfRef} placeholder="Leave blank to keep the same"/>
                                    </Form.Group>
                                    <Button disabled={loading} className="w-100" type="submit">Zaktualizuj</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                             <Link to="/">Odrzuć</Link>
                        </div>
                    </Container>
                </div>
            </div>
        </AuthProvider>
            </>
    )
}