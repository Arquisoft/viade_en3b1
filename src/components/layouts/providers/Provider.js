type ProviderEntity = {
    label: String,
    image: String,
    value: String,
    registerLink: String,
    description: String
};

export default class Provider {
    /*
     *  Function to get providers. This is to mimic the future provider registry
     */
    static getIdentityProviders(): Array<ProviderEntity> {
        return [
            {
                id: 'inrupt',
                label: 'Inrupt',
                image: process.env.PUBLIC_URL + '/img/inrupt.svg',
                value: 'https://inrupt.net/auth',
                registerLink: 'https://inrupt.net/register',
                description: 'Lorem ipsum dolor sit amet non ipsom dolor'
            },
            {
                id: 'solid-community',
                label: 'Solid Community',
                image: process.env.PUBLIC_URL + '/img/community.png',
                value: 'https://solid.community',
                registerLink: 'https://solid.community/register',
                description: 'Lorem ipsum dolor sit non consectetur'
            },
        ];
    }
}