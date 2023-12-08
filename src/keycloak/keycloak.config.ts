export default () =>({
    keycloak_auth_url : process.env.KEYCLOAK_AUTH_URL,
    keycloak_realm : process.env.KEYCLOAK_REALM,
    keycloak_client_id:process.env.KEYCLOAK_CLIENT_ID,
    keycloak_client_secret:process.env.KEYCLOAK_CLIENT_SECRET,
    keycloak_realm_public_key : process.env.KEYCLOAK_REALM_PUBLIC_KEY
})