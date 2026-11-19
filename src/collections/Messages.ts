import type { CollectionConfig , CollectionBeforeChangeHook, CollectionAfterChangeHook, CollectionAfterOperationHook} from 'payload'
// Make sure you have jsdom and @types/jsdom installed


let addToThread :CollectionAfterOperationHook=async ({
       args,
    operation,
    result,
    req,
}) =>{


    if(operation){
            console.log(result, "AFTER")
    }


    return result

}

export const addUserId : CollectionBeforeChangeHook = ({
    data,
    originalDoc,
    operation,
    req:{user}
})=>{
        console.log(data, originalDoc)



    if(operation==="create"){





        data.thread = parseInt(data.thread)
         data.sender = user?.id
         return data
    }

    return data


}

export const Message: CollectionConfig = {

    slug:"message",
    hooks:{
        beforeChange:[addUserId],
        afterOperation:[addToThread]

    },


    access:{
        read:({req:{user}})=>{
            return true
            if(user){
                return {"thread.member":{equals:user.id}}
            }

            return false
        },
        update:({req:{user}})=>{

             if(user){
                return {"thread.member":{equals:user.id}}
            }


            return false

        },
        create:({req:{user}})=>{

             if(user){
                return {"thread.member":{equals:user.id}}
            }


            return false

        }
    },
    fields:[  
                {type:"textarea", name:"content"},
                 {type:"relationship",  relationTo:"users", name:"sender" },
                {type:"relationship", relationTo:"thread", name:"thread"},
            
    ]
}