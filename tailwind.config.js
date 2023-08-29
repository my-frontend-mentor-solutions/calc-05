module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                /*--------------------------- Light Mode ---------------------------------  */

                /* backgrounds */
                'main-back-light': '#e6e6e6',
                'screen-back-light': '#f8f8f8',
                'keypad-back-light': '#d1cccc',

                /* keys */
                'imp-back-light': '#377f86',
                'imp-hover-light': '#439aa1',

                'key-back-light': '#e5e4e1',
                'key-hover-light': '#fffbf3',

                /* texts */
                'text-light': '#35352c',
                

                /* ------------------------------- Dark Mode ------------------------------- */

                /* backgrounds */
                'main-back-dark': '#3a4764',
                'screen-back-dark': '#182034',
                'keypad-back-dark': '#232c43',

                /* keys */
                'imp-back-dark': '#637097',
                'imp-hover-dark': '#7584b3',

                'key-back-dark': '#eae3dc',
                'key-hover-dark': '#fff',

                /* texts */
                'text-dark': '#444b5a',
            },

            flex: {
                'key': '0 0 25%'
            },

            boxShadow: {
                'grey-light': '0px 4px 0 #a69d91',
                'blue-light': '0px 4px 0 #1b5f65',

                'grey-dark': '0px 4px 0 #b4a597',
                'blue-dark': '0px 4px 0 #404e72',
            }
        },
    },
    plugins: [],
}

