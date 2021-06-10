import {MdPerson} from 'react-icons/md'

export default {
  title: 'Resource',
  name: 'resource',
  type: 'document',
  icon: MdPerson,
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
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Primary phone number for resource'
    },
    {
        title: 'Mobile',
        name: 'mobile',
        type: 'string',
        description: 'Resource is movable',
        validation: Rule => Rule.required()
    },
    {
        title: 'Contact',
        name: 'contact',
        type: 'string',
        description: 'Name of primary contact for resource',
        validation: Rule => Rule.required()
    },
    {
        title: 'Maintainer',
        name: 'maintainer',
        type: 'string',
        description: 'Active maintainer of resource',
        validation: Rule => Rule.required()
    },
    {
      title: 'Geographic Information',
      name: 'geographicInformation',
        type: 'object',
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
            },
            {
              name: 'city',
              title: 'City',
              type: 'string',
              description: 'Nearest city'
            },
            {
              name: 'state',
              title: 'State',
              type: 'string'
            },
            {
              name: 'zipCode',
              title: 'Zip Code',
              type: 'number'
            }

        ]
    },
   
    {
      title: 'Website',
      name: 'website',
      type: 'url',
      description: 'Website for resource'
    },
    {
        title: 'Notes',
        name: 'notes',
        type: 'text'
    },
    {
      title: 'Resource Images',
      name: 'resourceImages',
      type: 'array',
      of: [
          {
            type: 'image'
          }
      ]
    },
    {
        title: "Categories",
        name: "categories",
        type: "array",
        of: [{type: "string"}],
        options: {
          layout: "tags"
        }
    },
    {
        title: "Tags",
        name: "tags",
        type: "array",
        of: [{type: "string"}],
        options: {
          layout: "tags"
        }
    },
    
  ],
  
}
