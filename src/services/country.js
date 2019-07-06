import axios from 'axios';

export default (() => {
    const requiredHeaders = {
        'X-RapidAPI-Host': 'restcountries-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e395fa3572msh84a403b143d7b79p1617c8jsn8bd55733d121'
    }

    async function getAllCountries() {
        const { data } = await axios.get('https://restcountries-v1.p.rapidapi.com/all',
            {
                headers: {
                    ...requiredHeaders
                }
            });
        return data;
    }

    return {
        getAllCountries
    }
})();