

export async function apiGame(){
    
    try{
        const response=await fetch('https://game-wiki-xvar.onrender.com/games');
        const data= await response.json()

        if(!data.results && !Array.isArray(data.results)){
            throw new Error('data.results error')
        }

        const display=[];
        const mainIndex=new Set();
        const maxAttempts=100;
        let attempts=0;

        while(display.length<3 && attempts<maxAttempts ){
           
          
            let index=Math.floor(Math.random()*data.results.length)
          
             
            if(!mainIndex.has(index) && data.results[index]){
                mainIndex.add(index)
                display.push(data.results[index])
            }

            attempts++;
            if(attempts===maxAttempts){
                throw new error('To many Attempts')
            }
        }
        if(display.length<3){
            throw new Error('No valid games found')
        }
    
        console.log(display)
        return display
    
    }catch(error){
        console.error(`error fetching data`,error)
        throw error
    }
}

export async function apiDevlopers(id){

    try{
        const response= await fetch(`https://game-wiki-xvar.onrender.com/developers/${id}`)
        const data= await response.json()

        if(!data && !Array.isArray(data)){
            throw new Error('developers api api api api error')
        }
        
        return data
    }catch(error){
        console.error('developers error api',error)
    }

}

export async function apiRatedGames(){

    try{
        const response=await fetch(`https://game-wiki-xvar.onrender.com/rated`)
        const data= await response.json()
        return data;
    }catch(error){
        console.error("Error while calling backend ratedgames")
    }
}

export async function apiQuotes(){

    try{
        const response=await fetch(`https://game-wiki-xvar.onrender.com/quotes`)
        const data=response.json();
        return data;

    }catch(error){
        console.error("Error while calling backend quotes")
    }
} 

export async function apiSearch(query) {
    try {
        const response = await fetch(`https://game-wiki-xvar.onrender.com/search/${query}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data

    } catch (error) {
        console.error("Error while searching games:", error)
        throw error 
    }
}

export async function apiScreenshot(id){
    
    try{
        const response= await fetch(`https://game-wiki-xvar.onrender.com/screenshot/${id}`)
        const data= await response.json()
        return data
        
    }catch(error){
        console.error("Error while searching games:", error)
        throw error 
    }
}







    


