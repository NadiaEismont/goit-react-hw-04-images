import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (input) => {
    const response = await axios.get(
        `/?q=${input}&page=1&key=25251532-72426a9e0e55162032e249781&image_type=photo&orientation=horizontal&per_page=12`
    );
    console.log(response)
    return response.data.hits;
}