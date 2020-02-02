// import axios from 'axios';

const url = "http://api.datamuse.com"

const getSynsApi = (word) => fetch(`${url}/words?rel_syn=${word}`)
                            .then(v => v.json())
                            .then(data => data);

export default getSynsApi;