export const Environments = {
    Local: {
        name: 'Local',
        uiHost: 'localhost',
        uiBase: '/',
        apiHost: '',
        assetBase: '',
    },

    Dev: {
        name: 'Development',
        uiHost: 'https://blankpagepr0duction.web.app/',
        uiBase: '/',
        apiHost: '',
        assetBase: 'https://blankpageproductions.co.za/assets',
    },

    Prod: {
        name: 'Production',
        uiHost: 'https://blankpageproductions.co.za/',
        uiBase: '/',
        assetBase: 'https://blankpageproductions.co.za/assets',
    }
};

const currentHost = 
  !!window
  && !!window.location
  && typeof window.location.hostname === 'string'
  && window.location.hostname.toLowerCase();

let Environment;

switch(currentHost) {
    case Environments.Local.uiHost:
        Environment = Environments.Local;
        break;
    case Environments.Dev.uiHost:
        Environment = Environments.Local;
        break;
    case Environments.Prod.uiHost:
        default:
            Environment = Environments.Prod;
            break;
};

export default Environment;