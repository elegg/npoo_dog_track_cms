import type { CollectionConfig } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Experiment: CollectionConfig = {


    access:{
        read:()=>true
    },
    slug:"experiment",
    fields:[
        {type:"text",
            name:"title"
        },

        {type:"text", name:"description"}






        

    ]
}