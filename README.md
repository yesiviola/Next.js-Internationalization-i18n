# Internationalization vs localization


Internationalization : Es el proceso de diseñar software de manera que pueda adaptarse a difernetes idiomas y regiones,

No solo se refiere al idioma sino a preparar el software  para manejar distintas monedas o formatos horarios. 

-Localizacion: local en tecnologia, significa "configuracion regional".

locale : "en-US", "en-GB", en-CA",

locale: "en"

## next.config.js

-numeronimo : i18n.  internationalization     "tiene un total de 18 letras" 
este es un termino que se utiliza en tecnologia para designar un nombre corto o alias 

-Enrutamiento de sub-dominio
¨¨¨¨
i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
}
¨¨¨¨

-Enrutamiento cada local con diferentes dominios 

[
    {
        domain: 'example.com',
        defaultLocale: 'en-US',
    },
    {
        domain: 'example.eu',
        defaultLocale: 'es',
    },
    {
        domain: 'example.co.uk',
        defaultLocale: 'en-GB',
    },
]


-Se puede deshabilitar la detencion automatica del locale activo, con el parametro

localeDetection: false , añadiendolo al i18n en text.config.js


### Como accedemos a la informacion del locale activvo, con el parametro 