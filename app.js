const yargs=require('yargs')
const fs=require('fs')
const note=require('./notes')

//command for adding a note
yargs.command({
    command:"add",
    describe:"Add a note",
    builder:{
       title:{
        type:"string",
        describe:"Note title"
       },
       body:{
         type:'string',
         describe:'Body of note'
       }
    },
    handler:(argv)=>{
    fs.writeFileSync('1-json.json',note.addNote(argv['title'],argv['body']))
}})

//command for removing a note
yargs.command({
   command:"remove",
   describe:"Remove a note",
   builder:{
      title:{
         type:'string',
         describe:"title to remove"
      }
   },
   handler:(argv)=>{
     note.removeNote(argv['title'])
   }
})
yargs.parse()
