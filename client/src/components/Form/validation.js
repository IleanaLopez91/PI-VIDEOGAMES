export const validation = (inputs) => {
    const errors = {};
    const regexName = /^[a-zA-Z0-9\s]+$/;
    const regexImage = /^(ftp|http|https):\/\/[^ "]+$/i
    const regexFecha =  /^\d{4}-\d{2}-\d{2}$/;


    if(inputs.name.length > 12){
        errors.name = "El nombre no debe tener mas de 12 caracteres"
    }

    if(!regexName.test(inputs.name)){
        errors.name = "El usuario solo puede contener numeros, espacios vacios y letras"
    }

    if(!regexImage.test(inputs.background_image)){
        errors.background_image = "Debe ser una URL valida"
    }

    if(!inputs.description.length){
        errors.description = "No puede estar vacio"
    }

    if(inputs.description.length > 200){
        errors.description = "La descripcion no puede superar mas de 200 caracteres"
    }

    if(!inputs.platform.length){
        errors.platform = "Debe elegir al menos una plataforma"
    }

    if(!regexFecha.test(inputs.released)){
        errors.released = "La fecha tiene que tener este formato DD-MM-AAAA"
    }

    if(!inputs.released.length){
        errors.released = "No puede estar vacio"
    }

    if(inputs.rating > 10 || inputs.rating < 0){
        errors.rating = "Debe ser entre 0 y 10"
    }

    if(!inputs.rating.length){
        errors.rating = "No puede estar vacio"
    }

    if(!inputs.genres.length){
        errors.genres = "Debe elegir al menos una plataforma"
    }

    return errors

}