
function main() {
     
    const isStickFound = JSON.parse(readline());
    const isLightfound = JSON.parse(readline());

    const stickGathers = () =>{
        return new Promise((resolve,reject) =>{
            if(isStickFound) {
                console.log("Stuck Gathered");
            } else {
                console.log("istick Not Found,,,");
            }
        })
    }


    const isStickArranged = () =>{
        return new Promise((reolsve) =>{
            resolve("Stick Arranged");
        })
    }

    const cmapire = () =>{
        return new Promise((resolve,reject) =>{
            if(isLightfound) {
                console.log("Lighter Found");
            } else {
                console.log("ighter not found....");
            }
        })
    }


    const getAlltogether = async()=>{
        try{
            const sticks = await stickGathers();
            console.log(sticks);

            const arranged = await isStickArranged();
            console.log(arranged);

            const camp = await cmapire();
            console.log(camp);
            
        } catch(error) {
             console.log(error);
        }
    }

    getAlltogether();
}


