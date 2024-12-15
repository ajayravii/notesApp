const fs=require('fs')

const loadNote=()=>{
    try{
    const data=fs.readFileSync('1-json.json')
    return data
    }
    catch(e){
     return []
    }
    }

const addNote=(title,body)=>{
        const data=loadNote()
        let parsedData=[]
        if(data.length===0){
          return JSON.stringify(parsedData)
        }else{
        parsedData=JSON.parse(data)
        const isDuplicate=parsedData.find(item=>item?.title===title)
        if(!isDuplicate){
            parsedData.push({
                title:title,
                body:body
              })
        }
        const stringifiedData=JSON.stringify(parsedData)
        return stringifiedData
     }
  }

const removeNote=(title)=>{
    const data = loadNote()
    const parsedData=JSON.parse(data)
    const rewriteData = parsedData.filter(item=>item?.title!==title)
    fs.writeFileSync('1-json.json',JSON.stringify(rewriteData))
}

module.exports={
    loadNote,
    addNote,
    removeNote,
}