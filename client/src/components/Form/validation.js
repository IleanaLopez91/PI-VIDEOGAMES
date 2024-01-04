export const validation = (inputs) => {
    const errors = {};
    const regexName = /^[a-zA-Z0-9\s]+$/;
    const regexImage = /^(ftp|http|https):\/\/[^ "]+$/i;
    const regexFecha =  /^\d{4}-\d{2}-\d{2}$/;

    if(inputs.name.length > 12){
        errors.name = "The name must not exceed 12 characters"
    }

    if(!regexName.test(inputs.name)){
        errors.name = "The name can only contain numbers, empty spaces, and letters"
    }

    if(!regexImage.test(inputs.background_image)){
        errors.background_image = "It must be a valid URL"
    }

    if(!inputs.description.length){
        errors.description = "It cannot be empty"
    }

    if(inputs.description.length > 200){
        errors.description = "The description cannot exceed 200 characters"
    }

    if(!inputs.platforms.length){
        errors.platforms = "You must choose at least one platform"
    }

    if(!regexFecha.test(inputs.released)){
        errors.released = "The date must have the format YYYY-MM-DD"
    }

    if(!inputs.released.length){
        errors.released = "It cannot be empty"
    }

    if(inputs.rating > 5 || inputs.rating < 1){
        errors.rating = "It must be between 1 and 5"
    }

    if(!inputs.rating.length){
        errors.rating = "It cannot be empty"
    }

    if(!inputs.genres.length){
        errors.genres = "You must choose at least one genre"
    }

    return errors

}