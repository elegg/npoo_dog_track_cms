import type { CollectionConfig } from 'payload'
import {
  convertHTMLToLexical,
  editorConfigFactory,
} from '@payloadcms/richtext-lexical'
// Make sure you have jsdom and @types/jsdom installed


export const Threads: CollectionConfig = {

    slug:"thread",
    
    access:{
        read:({req:{user}})=>{


            if(user){
                //return true

                return {member:{equals:user.id}}
            }

            return false
            
        },
        update:()=>true
    },
    fields:[  
        
            {type:"relationship", relationTo:"experiment", name:"experiment", maxDepth:1},
           
   

            {type:"relationship", 
                
                
                relationTo:"users", name:"member", 
                
                
                hasMany:true, maxDepth:1},

               { name: 'message',
                     type: 'join',
                    collection: 'message',
                    on:"thread"

               }

            
    ]
}