export  const getGifs  = async  (category) =>{
    // const url = `https://nekos.best/api/v2/hug?amount=10`
    const url = `https://nekos.best/api/v2/${category}?amount=100`
    console.log("url:");
    console.log(url);

    const resp  = await fetch(url);
    console.log("resp:");
    console.log(resp);

    const {results} =  await resp.json();
    console.log("results:");
    console.log(results);
    const gifs= results.map(img=> ({
       id: img.id,
       url: img.url
    }) )
    //console.log(gifs);
    return gifs;
}