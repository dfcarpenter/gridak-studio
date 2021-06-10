
import {MdPerson} from 'react-icons/md'

export default {
  title: 'Entity',
  name: 'entity',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of entity',
      validation: Rule => Rule.required()
    },
    
    {
        title: 'Mobile',
        name: 'mobile',
        type: 'string',
        description: 'Owner of resource',
        validation: Rule => Rule.required()
    },
    {
        title: 'Contact',
        name: 'contact',
        type: 'string',
        description: 'Owner of resource',
        validation: Rule => Rule.required()
    },
    {
      title: 'Entity Image',
      name: 'entityImage',
      type: 'image'
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}
