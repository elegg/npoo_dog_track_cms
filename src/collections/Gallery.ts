import type { CollectionConfig } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Gallery: CollectionConfig = {

    slug:"gallery",
    fields:[  

                 {type:"relationship",  relationTo:"media", name:"image" }
            
    ]
}