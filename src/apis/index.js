import axios from 'axios';

export const getCategories = () => {
    try{
        axios.get("http://localhost:3001/categorie")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    catch(error){
        console.log(error);
    }
}