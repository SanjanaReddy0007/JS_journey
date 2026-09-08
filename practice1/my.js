function main() {
    let companyId = readline();
    let employeeId = parseInt(readline());
    

    let companies = [
         {
      companyCode:"PY234",
      employees: [293, 730, 637]
    },
    {
      companyCode:"GR023",
      employees:[823, 563]
    }, 
    {
      companyCode:"HC754",
      employees: [511, 529, 943]
    }, 
    {
      companyCode:"PA439",
      employees: [276, 188, 333]
    }
    ]


    const findCompanies = (companyId,employeId) => {
        return new Promise((resolve,reject)=>{
            let companyFound = false;

            for(let i=0;i<companies.length;i++) {
                 if(companyId == companies[i].companyCode) {
                    companyFound = true;

                    if(companies[i].employees.includes(employeId)) {
                        resolve("company found");
                    } else {
                        reject("Not found");
                    }
                 }
            }

            if(!companyFound) {
                reject("Try better");
            }
        })
    }


    let checkDetails = async() => {
       try{
          const result = await findCompanies(companyId,employeId);
          console.log(result);
       } catch(error){
          console.log(error);
       }
    }

    checkDetails();
}



