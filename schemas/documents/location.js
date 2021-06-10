

import {MdMap} from 'react-icons/md'

export default {
  title: 'Location',
  name: 'location',
  type: 'document',
  icon: MdMap,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of resource',
      validation: Rule => Rule.required()
    },
    {
      title: 'Owner',
      name: 'owner',
      type: 'string',
      description: 'Owner of resource',
      validation: Rule => Rule.required()
    },
    {
        type: 'object',
        title: 'Geographic Information',
        name: 'geographicInformation',
        fields: [
            {
                name: 'geoCoords',
                title: 'Geographic Coordinates',
                type: 'geopoint'

            },
            { 
                name: 'geographicLabel',
                title: 'Resource Location Address',
                type: 'string'
            
            }
        ]
    },
    
    {
      title: 'Location Image',
      name: 'locationImage',
      type: 'image'   
    }  
  ]
  
}
