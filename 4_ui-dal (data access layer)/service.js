/*getImages = (pageNumber) => {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`)
    return promise;
};*/

getImages = (pageNumber) => {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`);
    return promise.then((response) => {
        return response.data;
    })
}
