import React, { useState, useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import fireApp, { userInfoCollectionRef } from "../firebase/fire-app";
import firebase from "firebase/app";
import "firebase/auth"

export const AuthContext = React.createContext();
export const AuthContextProvider = ({ children }) => {
    const authManager = Auth();

    return (
        <AuthContext.Provider value={authManager}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = () => useContext(AuthContext);


const Auth = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false)
    const [hasAccess, setHasAccess] = useState(false);
    const [salesData, setSalesData] = useState(null);

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider).then((result) => {
            const fUser = result.user;
            const userDetails = { id: fUser.uid, name: fUser.displayName, email: fUser.email, photo: fUser.photoURL }
            const loggedEmail = result.user.email;
            userInfoCollectionRef.doc('admins').onSnapshot((doc) => {
                const adminData = doc.data();
                const allAdmins = adminData.admins;
                const isAdmin = allAdmins.filter(item => item === loggedEmail);
                setCurrentUser(userDetails);
                if (isAdmin.length > 0) {
                    setHasAccess(true);
                    return userDetails
                } else {
                    setHasAccess(false)
                }

            })

        }).catch(function (error) {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    useEffect(() => {
        fireApp.auth().onAuthStateChanged((result) => {
            if (result) {
                console.log(result);
                const fUser = result;
                const userDetails = { id: fUser.uid, name: fUser.displayName, email: fUser.email, photo: fUser.photoURL }
                const loggedEmail = result.email;
                userInfoCollectionRef.doc('admins').onSnapshot((doc) => {
                    const adminData = doc.data();
                    const allAdmins = adminData.admins;
                    const isAdmin = allAdmins.filter(item => item === loggedEmail);
                    setCurrentUser(userDetails);
                    if (isAdmin.length > 0) {
                        setHasAccess(true);
                        return userDetails
                    } else {
                        setHasAccess(false)
                    }

                })
            }
        });
    }, []);


    const signOut = () => {
        return fireApp
            .auth()
            .signOut()
            .then(() => {

                setCurrentUser(null)
            });
    };
    const basicLog = () => {
        console.log("test log");
    }

    return { currentUser, setCurrentUser, handleGoogleSignIn, signOut, basicLog, hasAccess, salesData };
};
