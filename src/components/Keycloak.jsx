import React, { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js'

const KeycloakComponent = () => {
	const [keycloak, setKeycloak] = useState(null)
	const [authenticated, setAuthenticated] = useState(false)
	const [userName, setUserName] = useState('')

	useEffect(() => {
		const initOptions = {
			url: 'http://localhost:8080/',
			realm: 'UNAHUR',
			clientId: 'front2',
		}

		const kc = new Keycloak(initOptions)

		kc.init({
			onLoad: 'check-sso',
			checkLoginIframe: true,
			pkceMethod: 'S256',
		})
			.then((auth) => {
				setKeycloak(kc)
				setAuthenticated(auth)
				if (auth) {
					console.info('Authenticated')
					console.log('auth', auth)
					console.log('Keycloak', kc)
					console.log('Access Token', kc.token)

					kc.loadUserProfile()
						.then((profile) => {
							setUserName(profile.username)
						})
						.catch((error) => {
							console.error('Error loading user profile:', error)
						})
				}
			})
			.catch(() => {
				console.error('Authentication Failed')
			})
	}, [])

	const handleLogin = () => {
		if (keycloak) {
			keycloak.login()
		}
	}

	const handleLogout = () => {
		if (keycloak) {
			keycloak.logout()
		}
	}
	return (
		<div>
			{authenticated ? (
				<button
					className="bg-red-600"
					onClick={handleLogout}>
					Cerrar Sesión
				</button>
			) : (
				<button
					className="bg-green-700"
					onClick={handleLogin}>
					Iniciar Sesión
				</button>
			)}
		</div>
	)
}

export default KeycloakComponent
