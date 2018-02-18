
const cryptor = (render, key, type) => {

        const hah = parseInt(key / 14.88 * 22.8),
                  arrRender = render.split('')

        if ( type == "crypt") {

                const toCode = arrRender.map(elem => elem.charCodeAt(0) + hah)

                return String.fromCharCode(...toCode)

        }


        if ( type == "uncrypt") {

                const toCode = arrRender.map(elem => elem.charCodeAt(0) - hah)

                return String.fromCharCode(...toCode)

        }

}

