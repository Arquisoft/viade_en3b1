import logo_inrupt from '../../assets/img/providers/inrupt.svg';
import logo_solid from '../../assets/img/providers/solidcommunity.png';
import logo_local from '../../assets/img/providers/server.svg';

type ProviderEntity = {
    label: String,
    image: String,
    value: String,
    registerLink: String,
    description: String,
};

export default class Provider {
    /*
     *  Function to get providers. This is to mimic the future provider registry
     */
    static getIdentityProviders(): Array<ProviderEntity> {
        return [
            {
                id: "inrupt",
                label: "Inrupt",
                image: logo_inrupt,
                value: "https://inrupt.net/auth",
                registerLink: "https://inrupt.net/register",
                description: "Lorem ipsum dolor sit amet non ipsom dolor",
            },
            {
                id: "solid-community",
                label: "Solid Community",
                image: logo_solid,
                value: "https://solid.community",
                registerLink: "https://solid.community/register",
                description: "Lorem ipsum dolor sit non consectetur",
            },
            {
                id: "local-pod-server",
                label: "Local Server",
                image: logo_local,
                value: "https://localhost:8443",
                registerLink: "https://localhost:8443/register",
                description: "Local server",
            },
        ];
    }
}