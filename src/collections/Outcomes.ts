import type { Block, CollectionConfig } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

const RichTextBlock : Block ={
  slug:"rt-block",
  
   fields:[
    {type:"text", name:"html", virtual:true, hooks:{
                      afterRead: [
      ({value, blockData}) => {
        // Format date for display
        return convertLexicalToHTML({data:blockData?.text})
      },
    ]}},
         {name:"text",
                    type:"richText",
                    
                    
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => {
                          return [
                            ...rootFeatures,
                            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                            FixedToolbarFeature(),
                           
                          ]
                        },
                      }),
                    label:"Text Information"
       
                    }     

                  ]
  
}

const GalleryBlock:Block = {
  slug:"gallery-block",
  
  fields:[
     {type:"relationship",  relationTo:"media", name:"image", hasMany:true }
  ]
}


export const Outcomes: CollectionConfig = {


    slug:"outcome",
    access:{
      read:()=>true
    },

    fields:[
      {

      type:"text",
      name:"title",

    },
    {
      type:"blocks",
      name:"elements",
      blocks:[
        RichTextBlock,
        GalleryBlock


      ]
    }
  ]
   

    
}